import Button from "@mui/material/Button";
import Header from "./_components/header";
import Imagens from "./_components/imagens";
import { Merriweather, Kanit } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <main className="">
      <section
        id="inicio"
        className="flex scroll-mt-40 flex-col items-center justify-center bg-blue-50 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`pb-2 text-4xl text-blue-900 ${kanit.className}`}>
          Início
        </h2>
        <p className="mb-5 md:w-[90%]">
          O <span className="font-bold text-blue-800">Libertas</span> é um
          partido de inspiração liberal cujo principal objetivo é alcançar a
          descentralização do Cefet/RJ. Atualmente, toda a estrutura da
          instituição está enraizada na sede do Maracanã, gerando problemas
          administrativos e infraestruturais que demonstram a desigualdade
          presente entre as unidades. Por exemplo, recursos financeiros
          adquiridos pela unidade através de ementas parlamentares vão antes
          para a matriz até que sejam finalmente transferidos para onde deveriam
          ir. Além disso, há complicações burocráticas causadas pela
          centralização que dificultam a vivência de docentes e discentes. Por
          isso, desejamos unir os ideais de{" "}
          <span className="italic">independência, igualdade e inovação</span> a
          fim de construirmos um Cefet melhor para todos.
        </p>
        <p className="md:w-[90%]">
          Defendemos a liberdade de expressão, somos contra qualquer tipo de
          preconceito e reconhecemos a importância da pluralidade política de
          ideias para a manutenção da democracia. O Libertas aceita cooperar com
          outros partidos desde que o objetivo inicial principal seja a
          descentralização verdadeira de nossa instituição. Acreditamos até que,
          com isso, as chances de concretização dos projetos de outras legendas
          aumentam muito.{" "}
          <span className="font-bold text-blue-800 italic">
            Libertas quæ sera tamen!
          </span>
        </p>
      </section>
      <section
        id="pautas"
        className="flex scroll-mt-40 flex-col items-center justify-center bg-blue-100 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`pb-2 text-4xl text-blue-900 ${kanit.className}`}>
          Pautas
        </h2>

        <ol className="flex list-decimal flex-col gap-3 md:w-[90%]">
          <li>
            <span>
              descentralização do Cefet/RJ em verdadeiras UnEDs (Unidades
              Descentralizadas), como Cefet/NF (Nova Friburgo), Cefet/NI (Nova
              Iguaçu), Cefet/AR (Angra dos Reis) etc.
            </span>
          </li>
          <li>
            <span>
              distribuição equitativa de verbas e recursos financeiros entre as
              UnEDs.
            </span>
          </li>
          <li>
            <span>
              manutenção, aprimoramento e ampliação dos cursos técnicos
              integrados, concomitantes e subsequentes: mais cursos, mais vagas
              e mais turmas.
            </span>
          </li>
          <li>
            cursos técnicos com duração de 4 (quatro) anos, sendo que o aluno
            pode escolher entre cursar só o Ensino Médio ou também cursar o
            técnico, promovendo uma maior liberdade de escolha, uma maior
            integração escolar, visando também permitir que os discentes se
            desenvolvam de forma harmônica em outras atividades oferecidas pela
            instituição.
          </li>
          <li>
            <span>
              igualdade entre todos os cursos técnicos em relação a questões
              como estágio obrigatório e práticas profissionais.
            </span>
          </li>
          <li>
            <span>
              legalização do uso dos celulares pelos discentes do Ensino Médio
              fora dos horários de aula, visando uma maior facilidade de
              comunicação.
            </span>
          </li>
          <li>
            <span>
              consolidação dos restaurantes universitários (RUs) em todas as
              unidades descentralizadas.
            </span>
          </li>
          <li>
            <span>
              imediato aprimoramento dos sistemas on-line do Cefet, como Portal
              do Aluno e Portal do Professor.
            </span>
          </li>
          <li>
            <span>
              melhoria dos equipamentos de informática para todas as unidades
              descentralizadas.
            </span>
          </li>
        </ol>
      </section>
      <section
        id="imagens"
        className="flex scroll-mt-40 flex-col items-center justify-center bg-blue-200 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`pb-5 text-4xl text-blue-900 ${kanit.className}`}>
          Imagens
        </h2>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <Imagens></Imagens>
          <img src="images/figurinha.gif" alt="" />
        </div>
      </section>
      <section
        id="junte-se"
        className="flex scroll-mt-40 flex-col items-center justify-center gap-5 bg-blue-300 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`text-4xl text-blue-900 ${kanit.className}`}>
          Junte-se a nós
        </h2>

        <p className="text-blue-600">Clique aqui para se afiliar a gente!</p>
        <Button
          variant="contained"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyRTSdxZSwVULfxrlAjU0I8pMZQt6cH1yFnHx22dhBjul-XQ/viewform?usp=send_form"
        >
          Filie-se
        </Button>
      </section>
    </main>
  );
}
