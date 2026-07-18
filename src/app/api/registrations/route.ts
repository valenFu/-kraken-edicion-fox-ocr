import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/kraken-ocr?retryWrites=true&w=majority';
const DB_NAME = 'kraken-ocr';

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(MONGODB_URI);
  cachedClient = client;
  return client;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      nombre,
      apellido,
      dni,
      email,
      telefono,
      categoria,
      distancia,
      talle,
      MetodoPago,
      comprobante,
    } = body;

    // Validation
    if (!nombre || !apellido || !dni || !email || !categoria || !distancia || !talle) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db(DB_NAME);
    
    const registration = {
      nombre,
      apellido,
      dni,
      email,
      telefono: telefono || '',
      categoria,
      distancia,
      talle,
      MetodoPago: MetodoPago || 'transferencia',
      comprobante: comprobante || '',
      estado: 'pendiente',
      fechaInscripcion: new Date(),
      createdAt: new Date(),
    };

    const result = await db.collection('registrations').insertOne(registration);

    return NextResponse.json(
      { 
        message: 'Inscripción registrada exitosamente',
        id: result.insertedId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating registration:', error);
    return NextResponse.json(
      { error: 'Error al procesar la inscripción' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db(DB_NAME);
    
    const registrations = await db.collection('registrations')
      .find({})
      .sort({ fechaInscripcion: -1 })
      .toArray();

    return NextResponse.json({ registrations });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json(
      { error: 'Error al obtener inscripciones' },
      { status: 500 }
    );
  }
}
