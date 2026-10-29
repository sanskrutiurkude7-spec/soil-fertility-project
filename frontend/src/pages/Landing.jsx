import { Link } from 'react-router-dom'; import { Sprout, FlaskConical, Wheat, Leaf, BarChart3, FileText } from 'lucide-react';
const F = [[FlaskConical, 'Soil Analysis', 'Enter pH, N, P, K, organic carbon and moisture for an instant health score.'], [Wheat, 'Crop Recommendation', 'Top 5 crops ranked by rule-based suitability.'],
  [Leaf, 'Fertilizer Advice', 'Deficiency-based fertilizer suggestions with precautions.'], [BarChart3, 'Charts & History', 'Track soil health across tests over time.'], [FileText, 'Printable Reports', 'Professional soil health reports you can print or save as PDF.']];
export default function Landing() {
  return (<div><div className="nav"><b style={{ fontSize: 20, color: 'var(--g)' }}><Sprout size={20} /> SoilCare</b>
    <nav><a href="#about">About</a><a href="#features">Features</a><a href="#how">How It Works</a><Link to="/login">Login</Link><Link className="btn sm" to="/register">Register</Link></nav></div>
    <div className="hero"><h1>Smart Soil Fertility Management System</h1><p>Analyze your soil, understand its nutrient condition, and make better crop and fertilizer decisions.</p>
      <Link className="btn" style={{ background: '#fff', color: 'var(--g2)', marginRight: 10 }} to="/register">Start Soil Analysis</Link><Link className="btn out" style={{ background: 'transparent', color: '#fff', borderColor: '#fff' }} to="/login">Login</Link></div>
    <section className="sec" id="about"><h2>About the System</h2><p style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', color: 'var(--mu)', lineHeight: 1.7 }}>Healthy soil is the foundation of good harvests. SoilCare helps farmers record soil tests, detect nutrient deficiencies and follow advisory crop, fertilizer and soil-management suggestions.</p></section>
    <section className="sec" id="features" style={{ background: '#fff' }}><h2>Features</h2><div className="grid g3">{F.map(([I, t, d]) => <div className="card feat" key={t}><div className="ic"><I /></div><h3>{t}</h3><p style={{ color: 'var(--mu)', marginTop: 8 }}>{d}</p></div>)}</div></section>
    <section className="sec" id="how"><h2>How It Works</h2><div className="grid g4">{['Register & log in', 'Enter soil test values', 'View health score & nutrients', 'Get crops, fertilizers & report'].map((s, i) => <div className="card feat" key={s}><div className="ic"><b>{i + 1}</b></div>{s}</div>)}</div></section>
    <footer style={{ background: 'var(--g2)', color: '#d1fae5', padding: 24, textAlign: 'center' }}>© SoilCare – Community Soil Fertility Management System. Recommendations are advisory only.</footer></div>);
}
