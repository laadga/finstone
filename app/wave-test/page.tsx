import { Waves } from '@/components/ui/wave-background'

export default function WaveTestPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <Waves 
          strokeColor="#B08D57" 
          backgroundColor="transparent"
          pointerSize={0.5}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Wave Background Test</h1>
          <p className="text-xl">Move your mouse to see the interactive waves!</p>
          <p className="text-sm mt-4 text-[#B08D57]">You should see warm bronze animated lines responding to your cursor</p>
        </div>
      </div>
    </div>
  )
}
