'use client';

import React from 'react';

// Define service type
type Service = {
  id: number;
  name: string;
  description: string;
  price: string;
  materials?: string[];
};

// Updated services data
const services: Service[] = [
  {
    id: 1,
    name: 'Repair & Maintenance',
    description:
      'Complete 3D printer diagnostics, hardware repair, nozzle replacement, bed leveling, firmware updates, and calibration for smooth operation.',
    price: '$50 - $120',
  },
  {
    id: 2,
    name: 'Professional 3D Printing Service',
    description:
      'High-quality 3D printing for prototypes, product parts, architectural models, mechanical components, and custom designs.',
    price: '$10 per hour',
    materials: ['PLA Plastic', 'ABS Plastic', 'PETG Plastic', 'TPU (Flexible Rubber)'],
  },
  {
    id: 3,
    name: 'Filament & Material Supply',
    description:
      'Premium-quality printing materials suitable for industrial and commercial use. Available in various colors and strengths.',
    price: '$20 - $45 per spool',
    materials: [
      'PLA (Biodegradable Plastic)',
      'ABS (Strong Industrial Plastic)',
      'PETG (Durable Plastic)',
      'TPU (Flexible Rubber-like Material)',
      'Rubber-based Flexible Filament',
    ],
  },
];

// Service Card
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const handleRequest = () => {
    alert(`Service requested: ${service.name}`);
  };

  return (
    <div className="service-card">
      <h3 className="service-title">{service.name}</h3>
      <p className="service-description">{service.description}</p>

      {service.materials && (
        <div className="materials">
          <strong>Available Materials:</strong>
          <ul>
            {service.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="service-price">
        <strong>Price:</strong> {service.price}
      </p>

      <button onClick={handleRequest} className="service-button">
        Request Service
      </button>
    </div>
  );
};

// Main Page
export default function PrinterServices() {
  return (
    <div className="services-container">
      <h1 className="page-title">3D Printer Services</h1>
      <p className="page-subtitle">
        Professional 3D printing solutions using high-quality plastic and flexible rubber materials.
      </p>

      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}