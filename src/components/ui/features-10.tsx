import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Calendar, LucideIcon, MapIcon } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="bg-[#e9e4dc] py-16 md:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
                <div className="mx-auto grid gap-4 lg:grid-cols-2">
                    <FeatureCard>
                        <CardHeader className="pb-3">
                                                     <CardHeading
                             icon={MapIcon}
                             title="Automated Invoicing & Payments"
                             description="Automated Invoicing System
Eliminate late payments and cash flow stress with AI-powered invoicing."
                         />
                        </CardHeader>

                                                 <div className="relative mb-6 border-t border-dashed sm:mb-0">
                             <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),white_125%)]"></div>
                             <div className="aspect-[76/59] p-1 px-6 pb-0">
                                <DualModeImage
                                    darkSrc="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=75"
                                    lightSrc="https://tailark.com/_next/image?url=%2Fpayments-light.png&w=3840&q=75"
                                    alt="payments illustration"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard>
                        <CardHeader className="pb-3">
                                                     <CardHeading
                             icon={Calendar}
                             title="Smart Resource Scheduling"
                             description="Smart Scheduling & Task Automation
Keep your business on track with automated scheduling and reminders."
                         />
                        </CardHeader>

                                                  <div className="relative mb-6 border-t border-dashed sm:mb-0">
                              <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                              <div className="aspect-[76/59] p-1 px-6 pb-0">
                                 <DualModeImage
                                     darkSrc="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                                     lightSrc="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                                     alt="calendar illustration"
                                     width={1207}
                                     height={929}
                                 />
                             </div>
                         </div>
                    </FeatureCard>

                    <FeatureCard className="p-6 lg:col-span-2">
                                                 <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">Smart Rules & Automation

Set it once, and let AI handle the rest.</p>

                        <div className="flex justify-center gap-6 overflow-hidden">
                                                         <CircularUI
                                 label="Reminders"
                                 circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                             />

                             <CircularUI
                                 label="Recurring Tasks"
                                 circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                             />

                             <CircularUI
                                 label="Team Sync"
                                 circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                             />

                             <CircularUI
                                 label="No Overlaps"
                                 circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                                 className="hidden sm:block"
                             />
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-none bg-transparent border shadow-none', className)}>
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span className="text-muted-foreground flex items-center gap-2">
            <Icon className="size-4" />
            {title}
        </span>
        <p className="mt-8 text-2xl font-semibold">{description}</p>
    </div>
)

interface DualModeImageProps {
    darkSrc: string
    lightSrc: string
    alt: string
    width: number
    height: number
    className?: string
}

const DualModeImage = ({ darkSrc, lightSrc, alt, width, height, className }: DualModeImageProps) => (
    <>
        <img
            src={darkSrc}
            className={cn('hidden dark:block', className)}
            alt={`${alt} dark`}
            width={width}
            height={height}
        />
        <img
            src={lightSrc}
            className={cn('shadow dark:hidden', className)}
            alt={`${alt} light`}
            width={width}
            height={height}
        />
    </>
)

interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'blue'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={className}>
        <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
            <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-7 rounded-full border sm:size-8', {
                            'border-primary': circle.pattern === 'none',
                            'border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]': circle.pattern === 'border',
                            'border-primary bg-background bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]': circle.pattern === 'primary',
                            'bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'blue',
                        })}></div>
                ))}
            </div>
        </div>
        <span className="text-muted-foreground mt-1.5 block text-center text-sm">{label}</span>
    </div>
)
