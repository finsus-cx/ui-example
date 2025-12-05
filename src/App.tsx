import { CardBanner, ProductCard, CTAButton } from '@finsus-cx/ui'

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
)

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-8 bg-gray-100">
      <div className="w-64 flex flex-col gap-4">
        <CardBanner
          imageUrl="https://haeagvnqzkcciaiqonxw.supabase.co/storage/v1/object/public/finsus/promocional_1.png"
          alt="Finsus Banner"
          variant="default"
          onClick={() => console.log('CardBanner clicked')}
        />
        <CTAButton icon={<WalletIcon />} variant="primary">
          Abrir mi cuenta
        </CTAButton>
        <CTAButton variant="secondary">
          Secundario
        </CTAButton>
        <CTAButton variant="white">
          Blanco
        </CTAButton>
        <CTAButton variant="white-hover-red" icon={<WalletIcon />}>
          Blanco hover rojo
        </CTAButton>
        <CTAButton variant="primary" textAlign="left">
          Texto izquierda
        </CTAButton>
        <CTAButton variant="secondary" textAlign="right">
          Texto derecha
        </CTAButton>
      </div>
      <ProductCard
        buttonText="Solicitar crédito"
        description="Adquiere un crédito de forma fácil y rápida para impulsar tu negocio o cubrir tus necesidades personales."
        icon="https://haeagvnqzkcciaiqonxw.supabase.co/storage/v1/object/public/finsus/credito-icon.png"
        title={<>Crédito{' '}<span className="text-finsus-red">simple</span></>}
      />
    </div>
  )
}

export default App
