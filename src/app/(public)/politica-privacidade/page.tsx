// pages/privacy-policy.tsx



export default function PrivacyPolicy() {
  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Política de Privacidade</h1>

        <p className="mb-4">
          Esta Política de Privacidade descreve como o aplicativo <strong>PTAM Pocket</strong> coleta,
          usa, armazena e protege suas informações. Ao utilizar o aplicativo, você concorda com os
          termos descritos aqui.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">1. Informações Coletadas</h2>
          <p>
            Podemos coletar informações como:
            <ul className="list-disc ml-6 mt-2">
              <li>Dados inseridos manualmente por você (como valores de imóveis e áreas);</li>
              <li>Dados técnicos do dispositivo (sistema operacional, modelo, idioma);</li>
              <li>Informações de uso e navegação no app.</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">2. Uso das Informações</h2>
          <p>
            As informações coletadas são utilizadas para:
            <ul className="list-disc ml-6 mt-2">
              <li>Oferecer funcionalidades de avaliação mercadológica;</li>
              <li>Melhorar a experiência do usuário;</li>
              <li>Corrigir bugs e otimizar desempenho;</li>
              <li>Garantir segurança e conformidade com normas técnicas.</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">3. Compartilhamento de Dados</h2>
          <p>
            Não compartilhamos seus dados pessoais com terceiros, exceto quando exigido por lei ou para
            cumprir obrigações legais.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">4. Armazenamento e Segurança</h2>
          <p>
            Seus dados são armazenados com práticas de segurança modernas, incluindo criptografia em
            trânsito e controles de acesso. No entanto, nenhum sistema é 100% seguro e não podemos
            garantir proteção absoluta.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">5. Direitos do Usuário</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações. Para isso, entre em
            contato através do suporte informado no aplicativo.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">6. Alterações nesta Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Notificaremos os usuários em caso de
            alterações relevantes.
          </p>
        </section>

        <p className="mt-10 text-sm text-gray-500">
          Última atualização: 12 de abril de 2025.
        </p>
      </main>
    </>
  );
}
