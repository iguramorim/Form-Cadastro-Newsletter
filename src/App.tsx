import Form from "./components/Form";

export default function App() {
  return (
    <div className="font-poppins max-w-2xl mt-2 mx-auto max-sm:mx-2 border-2 border-solid border-white border-opacity-5 p-6 rounded-md flex flex-col">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-3xl text-blue-500">Inscreva-se</h1>
        <p>Assine nossa Newsletter</p>
      </div>
      <div>
        <Form />
      </div>
      <p className="mt-5">
        Ao se inscrever, você passará a receber os nossos e-mails com as
        melhores dicas, novidades e ofertas.
      </p>
    </div>
  );
}
