'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const BAD_WORDS = [
  'ass','asshole','shit','fuck','crap','damn','bitch','bastard','dick','cock',
  'pussy','cunt','fag','faggot','nigger','nigga','retard','whore','slut','piss',
  'turd','poop','butt','boob','boobs','penis','vagina','sex','sexy','nude',
  'naked','porn','drugs','weed','meth','idiot','stupid','dumb','dummy',
]

function isBadName(name: string) {
  const lower = name.toLowerCase().replace(/[^a-z]/g, '')
  return BAD_WORDS.some(w => lower.includes(w))
}

function playCameraSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    // Mechanical shutter click
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) {
      const t = i / ctx.sampleRate
      data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 30) * (t < 0.01 ? 1 : 0.3)
    }
    const src = ctx.createBufferSource()
    src.buffer = buf
    const gain = ctx.createGain()
    gain.gain.value = 0.8
    src.connect(gain)
    gain.connect(ctx.destination)
    src.start()
  } catch {}
}

export default function ClassroomLanding() {
  const router = useRouter()
  const [joinCode, setJoinCode] = useState('')
  const [joinName, setJoinName] = useState('')
  const [error, setError] = useState('')
  const [busted, setBusted] = useState(false)
  const [flash, setFlash] = useState(false)
  const flashTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleNameChange(val: string) {
    setJoinName(val.slice(0, 10))
    if (busted) setBusted(false)
  }

  function triggerCamera() {
    playCameraSound()
    setFlash(true)
    setBusted(true)
    if (flashTimeout.current) clearTimeout(flashTimeout.current)
    flashTimeout.current = setTimeout(() => setFlash(false), 400)
  }

  useEffect(() => () => { if (flashTimeout.current) clearTimeout(flashTimeout.current) }, [])

  async function handleJoin() {
    const code = joinCode.trim().toUpperCase()
    const name = joinName.trim().slice(0, 10)
    if (code.length < 4) { setError('Enter a valid room code'); return }
    if (name.length < 1) { setError('Enter your name'); return }
    if (isBadName(name)) {
      triggerCamera()
      setError('')
      return
    }
    router.push(`/classroom/student?code=${code}&name=${encodeURIComponent(name)}`)
  }

  return (
    <>
      {/* Camera flash overlay */}
      {flash && (
        <div
          className="fixed inset-0 z-50 pointer-events-none"
          style={{ background: 'white', opacity: flash ? 1 : 0, transition: 'opacity 0.4s' }}
        />
      )}

      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-sm flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold" style={{ color: '#d4aa50' }}>🏫 Classroom Mode</h1>
            <p className="text-gray-400 text-sm mt-2">Multiplayer · Real-time · Teacher-paced</p>
          </div>

          {/* Teacher */}
          <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-5 flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">I'm a Teacher</div>
            <p className="text-xs text-gray-400">Create a room, share the code, and control the game pace.</p>
            <button onClick={() => router.push('/classroom/teacher')} className="w-full py-3 rounded-xl font-bold transition-all active:scale-95" style={{ background: '#d4aa50', color: '#0a0a0f' }}>
              Create Room
            </button>
          </div>

          {/* Student */}
          <div className="bg-[#14141c] border border-[#2a2a3a] rounded-xl p-5 flex flex-col gap-3">
            <div className="text-sm font-semibold text-white">I'm a Student</div>
            <input
              type="text"
              placeholder="Room code (e.g. TIGER42)"
              value={joinCode}
              onChange={e => setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
              maxLength={8}
              className="w-full px-3 py-2 rounded-lg bg-[#0a0a0f] border border-[#2a2a3a] text-white text-sm focus:outline-none focus:border-[#d4aa50] uppercase tracking-widest"
            />
            <input
              type="text"
              placeholder="Your name (up to 10 chars)"
              value={joinName}
              onChange={e => handleNameChange(e.target.value)}
              maxLength={10}
              className="w-full px-3 py-2 rounded-lg bg-[#0a0a0f] border text-white text-sm focus:outline-none"
              style={{ borderColor: busted ? '#e04040' : '#2a2a3a' }}
            />

            {/* Busted message */}
            {busted && (
              <div className="flex flex-col items-center gap-1 py-2 animate-slide-up">
                <div className="text-3xl">📸</div>
                <div className="text-sm font-bold text-white text-center">
                  Mr. Ward is recording your picture.
                </div>
                <div className="text-xs text-gray-400 text-center">Pick a different name to continue.</div>
              </div>
            )}

            {error && !busted && <p className="text-xs text-[#e04040]">{error}</p>}

            <button onClick={handleJoin} className="w-full py-3 rounded-xl font-bold border border-[#2a2a3a] text-gray-300 hover:border-[#d4aa50] transition-all">
              Join Room
            </button>
          </div>

          <button onClick={() => router.push('/')} className="text-sm text-gray-500 text-center hover:text-white">
            ← Back to Home
          </button>
        </div>
      </main>
    </>
  )
}
