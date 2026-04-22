'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterForm() {
  const [state, setState] = useState<State>('idle')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setTimeout(() => {
      setState('success')
      setEmail('')
    }, 900)
  }

  if (state === 'success') {
    return (
      <p className="font-sans text-stone-editorial text-sm py-4 animate-fade-in">
        Thank you — you will hear from us soon.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-0 max-w-md"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        disabled={state === 'loading'}
        className="flex-1 bg-white border border-void/15 border-r-0 text-void placeholder:text-stone-muted px-5 py-3.5 font-sans text-sm outline-none focus:border-void/40 transition-colors duration-200 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        className="inline-flex items-center justify-center gap-2 bg-saffron text-white font-sans font-semibold text-xs px-8 py-3.5 uppercase tracking-[0.12em] hover:bg-saffron-dark transition-colors duration-200 active:scale-[0.98] disabled:opacity-60 shrink-0"
      >
        {state === 'loading' ? (
          <span className="opacity-70">Sending…</span>
        ) : (
          <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
        )}
      </button>
    </form>
  )
}
