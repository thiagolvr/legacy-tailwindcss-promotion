import Link from "./components/Link";
import { H1, H3 } from "./components/Typography";
function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <H1>
        O melhor
        <br />
        <span className="uppercase text-purple-700">açaí</span>
        <br /> do Brasil
      </H1>

      <H3>Está chegando na sua cidade</H3>

      <Link href="https://google.com.br">Seja notificado &#8594;</Link>
    </div>
  );
}

export default App;
