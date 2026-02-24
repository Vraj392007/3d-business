'use client'; // Client component for interactivity

import React, { useState } from 'react';

// Define the type for a business model
type BusinessModel = {
  id: number;
  title: string;
  description: string;
  revenue: string;
  targetMarket: string;
  example: string;
};

// Sample 3D business models
const businessModels: BusinessModel[] = [
  {
    id: 1,
    title: '3D Printing Service Bureau',
    description: 'Offer on-demand printing services to clients who don’t own 3D printers.',
    revenue: 'Pay-per-print, subscriptions, premium finishing',
    targetMarket: 'Hobbyists, startups, schools',
    example: 'Cosplay items, prototypes, architectural models',
  },
  {
    id: 2,
    title: 'Custom Product Manufacturing',
    description: 'Design and sell customizable products like jewelry, decor, or gifts.',
    revenue: 'Online store sales, limited edition products, premium pricing',
    targetMarket: 'Consumers looking for personalized products',
    example: 'Custom phone cases, figurines, keychains',
  },
  {
    id: 3,
    title: 'Industrial/Professional Prototyping',
    description: 'High-end 3D printing for prototyping or small batch production using advanced materials.',
    revenue: 'Contracted services, low-volume manufacturing, consulting',
    targetMarket: 'Engineers, R&D teams, medical & aerospace companies',
    example: 'Automotive parts, dental implants, aerospace components',
  },
];

// Component for a single business model card
const BusinessCard: React.FC<{ model: BusinessModel }> = ({ model }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 }}>
      <h3>{model.title}</h3>
      <p>{model.description}</p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{ marginTop: 8, padding: '6px 12px', borderRadius: 4, cursor: 'pointer' }}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div style={{ marginTop: 8, backgroundColor: '#f9f9f9', padding: 8, borderRadius: 4 }}>
          <p><strong>Revenue Streams:</strong> {model.revenue}</p>
          <p><strong>Target Market:</strong> {model.targetMarket}</p>
          <p><strong>Example:</strong> {model.example}</p>
        </div>
      )}
    </div>
  );
};

// Main page component
const Page: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>3D Printer Business Models</h1>
      {businessModels.map(model => (
        <BusinessCard key={model.id} model={model} />
      ))}
    </div>
  );
};

export default Page;