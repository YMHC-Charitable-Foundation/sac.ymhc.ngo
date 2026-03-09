import React from 'react';
import Layout from '@theme/Layout';

export default function Stories() {
  return (
    <Layout title="Stories" description="Stories page">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '2rem' }}>
        <p>This is a standalone page. We will do something like an iframe inside it. It is not documentation.</p>
        <iframe 
          src="about:blank" 
          title="Stories Iframe"
          style={{ width: '100%', height: '80%', border: '1px solid #ccc', marginTop: '2rem' }}
        />
      </div>
    </Layout>
  );
}
