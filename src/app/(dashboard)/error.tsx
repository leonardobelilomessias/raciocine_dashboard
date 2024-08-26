'use client';
 
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center pt-10 gap-5">
      <h2 className="text-center font-bold ">Algo deu errado!</h2>
      <p>Tente novamente ou entre em contato com o suporte de nossa equipe</p>
      <Button className='w-[150px]'
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Tentar novamente
      </Button>
      <Link href='/suporte'>
        <Button className='w-[150px]'>
          Chamar Suporte
        </Button>
      </Link>
    </main>
  );
}