'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #eee',
      padding: '10px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Left */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/teacher" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold', fontSize: '12px' }}>EDUCATOR</Link>
        <Link href="/student" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold', fontSize: '12px' }}>STUDENT</Link>
      </div>

      {/* Middle - Forced Logo Size */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <img 
          src="/logo prism iq.png" 
          alt="Logo" 
          style={{ height: '40px', width: 'auto', display: 'block' }} 
        />
        <span style={{ fontSize: '20px', fontWeight: '900', color: '#2C3E50', letterSpacing: '-1px' }}>
          PRISM <span style={{ color: '#2563eb' }}>IQ</span>
        </span>
      </Link>

      {/* Right */}
      <div style={{ fontSize: '10px', fontWeight: 'bold', opacity: 0.3 }}>V1.0 LIVE</div>
    </nav>
  );
}