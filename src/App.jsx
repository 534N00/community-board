import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="container">
      <h1>Campustown Favorites</h1>
      <Card image="src\assets\ambar.png" title ="Ambar" genre="Indian" map="https://maps.app.goo.gl/wZx4tKtUhfsi1uLt5" />
      <Card image="src\assets\spoon.png" title="Spoon House" genre="Korean" link="http://www.spoonhousecu.com/" map="https://maps.app.goo.gl/76WwNuGP4rxBBVD26" />
      <Card image="src\assets\shawarma-joint.png" title="Shawarma Joint" genre="Middle Eastern" link="https://www.shawarma-joint.com/" map="https://maps.app.goo.gl/usS8V7bf81pdmxF76" />
      <Card image="src\assets\mia-zas.png" title="Mia Za's" genre="Italian" link="http://www.miazas.com/" map="https://maps.app.goo.gl/4JXdHv2y768FYybV9" />
      <Card image="src\assets\teamoji.png" title="Teamoji" genre="Bubble Tea" link="https://pos.chowbus.com/online-ordering/store/293" map="https://maps.app.goo.gl/jNCgFzPWBZjbbNRJ9" />
      <Card image="src\assets\cracked.png" title="Cracked" genre="Breakfast" link="http://www.crackedongreen.com/" map="https://maps.app.goo.gl/YrmSbLg4QzNmStcv6" />
      <Card image="src\assets\bangkok.png" title="Bangkok Thai" genre="Thai" map="https://maps.app.goo.gl/z11jum2x589sZvsQ8" />
      <Card image="src\assets\jurassic-grill.png" title="Jurassic Grill" genre="Burger" link="https://jurassicgrillchampaign.com/" map="https://maps.app.goo.gl/iKQLZ6E5xfetq3zF9" />
      <Card image="src\assets\red-lion.png" title="Red Lion" genre="Dance Bar" link="https://www.redlionchampaign.com/" map="https://maps.app.goo.gl/YvuK1bppzWyES3MC8" />
      <Card image="src\assets\latea.png" title="Latea" genre="Bubble Tea" link="http://latealounge.com/" map="https://maps.app.goo.gl/LiR5eRgeR7Zk1bDw5" />
      <Card image="src\assets\bab-plus.png" title="Bab Plus" genre="Korean" map="https://maps.app.goo.gl/cgeDqpSR8qhLDG6j9" />
      <Card image="src\assets\maize.png" title="Maize Mexican Grill" genre="Mexican" link="http://www.maizemexicangrill.com/" map="https://maps.app.goo.gl/txCczG3RtzSWkXfZ9" />
    </div>
  );
}

export default App;