import React from 'react';

function CallToAction() {
  return (
    <section className="cta">
      <h2>Ready to Start Learning?</h2>
      <button onClick={() => window.location.href='signuppage.html'}>Signup Now</button>
    </section>
  );
}

export default CallToAction;
