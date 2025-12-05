import React, { useState, useEffect, useRef } from 'react';
import { 
    Menu, X, Wrench, Zap, Trash2, 
    Smartphone, CheckCircle, 
    RefreshCw, ArrowRight, MousePointer 
} from 'lucide-react';

// --- Theme Constants (Strict 3-Color Palette) ---
// Color 1: #F2F0E9 (Retro Off-White)
// Color 2: #1A1A1A (Ink Black)
// Color 3: #FFD000 (Safety Yellow)

const RetroFadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, { threshold: 0.1 });
        
        const { current } = domRef;
        if (current) observer.observe(current);
        
        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// --- Retro Face Components ---

const FaceAnthony = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Face Shape */}
        <rect x="25" y="25" width="50" height="60" fill="#F2F0E9" stroke="#1A1A1A" strokeWidth="3" />
        {/* Hair */}
        <path d="M20,25 L80,25 L80,40 L20,40 Z" fill="#1A1A1A" />
        <rect x="20" y="20" width="60" height="15" fill="#1A1A1A" />
        {/* Eyes */}
        <rect x="35" y="50" width="8" height="8" fill="#1A1A1A" />
        <rect x="57" y="50" width="8" height="8" fill="#1A1A1A" />
        {/* Mouth */}
        <rect x="40" y="70" width="20" height="3" fill="#1A1A1A" />
    </svg>
);

const FaceElina = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Hair Back */}
        <path d="M20,30 Q50,10 80,30 L85,80 L15,80 Z" fill="#1A1A1A" />
        {/* Face Shape */}
        <rect x="30" y="30" width="40" height="45" fill="#F2F0E9" stroke="#1A1A1A" strokeWidth="3" />
        {/* Bangs */}
        <rect x="30" y="30" width="40" height="10" fill="#1A1A1A" />
        {/* Eyes */}
        <circle cx="42" cy="50" r="3" fill="#1A1A1A" />
        <circle cx="58" cy="50" r="3" fill="#1A1A1A" />
        {/* Mouth */}
        <path d="M42,65 Q50,70 58,65" fill="none" stroke="#1A1A1A" strokeWidth="2" />
    </svg>
);

const FaceAlan = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Face Shape */}
        <rect x="25" y="25" width="50" height="60" rx="10" fill="#F2F0E9" stroke="#1A1A1A" strokeWidth="3" />
        {/* Hair Spikes */}
        <path d="M25,25 L35,10 L45,25 L55,10 L65,25 L75,10 L75,25 Z" fill="#1A1A1A" />
        {/* Visor / Glasses */}
        <rect x="25" y="45" width="50" height="12" fill="#1A1A1A" />
        <rect x="30" y="48" width="15" height="6" fill="#F2F0E9" />
        <rect x="55" y="48" width="15" height="6" fill="#F2F0E9" />
        {/* Mouth */}
        <rect x="45" y="75" width="10" height="3" fill="#1A1A1A" />
    </svg>
);

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        { name: "OVERVIEW", href: "#overview" },
        { name: "SPECS", href: "#features" },
        { name: "PROCESS", href: "#process" },
        { name: "TEAM", href: "#team" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-[#F2F0E9] border-b-2 border-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
                    <div className="w-10 h-10 bg-[#FFD000] border-2 border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0px_0px_#1A1A1A] group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        <span className="font-mono font-bold text-[#1A1A1A] text-lg">18</span>
                    </div>
                    <span className="font-mono font-bold text-xl tracking-tighter text-[#1A1A1A] uppercase">
                        SmartDesk<span className="text-[#FFD000] bg-[#1A1A1A] px-1 ml-1">AUTO</span>
                    </span>
                </div>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="font-mono font-bold text-[#1A1A1A] hover:bg-[#FFD000] px-2 py-1 transition-colors border-b-2 border-transparent hover:border-[#1A1A1A]"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X strokeWidth={3} /> : <Menu strokeWidth={3} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#F2F0E9] border-b-2 border-[#1A1A1A] p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="font-mono font-bold text-xl text-[#1A1A1A] hover:text-[#FFD000] uppercase">
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[#F2F0E9] overflow-hidden border-b-2 border-[#1A1A1A]">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <div className="space-y-8">
                    <RetroFadeIn delay={100}>
                        <div className="inline-block px-4 py-2 border-2 border-[#1A1A1A] bg-white font-mono text-sm font-bold shadow-[4px_4px_0px_0px_#1A1A1A]">
                            FINAL PROJECT • TEAM 18
                        </div>
                    </RetroFadeIn>
                    
                    <RetroFadeIn delay={200}>
                        <h1 className="text-4xl md:text-7xl font-black leading-none text-[#1A1A1A] tracking-tighter">
                            CLEAN DESK.<br/>
                            <span className="bg-[#FFD000] px-2">CLEAR MIND.</span>
                        </h1>
                    </RetroFadeIn>
                    
                    <RetroFadeIn delay={300}>
                        <p className="text-lg md:text-xl font-mono text-[#1A1A1A] max-w-lg leading-relaxed border-l-4 border-[#FFD000] pl-6">
                            Autonomous surface maintenance system. Monitors debris in real-time. Sweeps precisely.
                        </p>
                    </RetroFadeIn>
                    
                    <RetroFadeIn delay={400}>
                        <div className="flex flex-wrap gap-4">
                            <a href="#process" className="bg-[#1A1A1A] text-[#FFD000] px-6 py-3 md:px-8 md:py-4 font-mono font-bold border-2 border-[#1A1A1A] hover:bg-[#FFD000] hover:text-[#1A1A1A] transition-all hover:shadow-[4px_4px_0px_0px_#1A1A1A] flex items-center gap-2">
                                VIEW PROCESS <ArrowRight size={20} />
                            </a>
                            <a href="#video" className="bg-transparent text-[#1A1A1A] px-6 py-3 md:px-8 md:py-4 font-mono font-bold border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all hover:shadow-[4px_4px_0px_0px_#1A1A1A]">
                                WATCH DEMO
                            </a>
                        </div>
                    </RetroFadeIn>
                </div>
                
                {/* Updated Animation based on user image */}
                <RetroFadeIn delay={500} className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
                    <div className="w-full h-full border-4 border-[#1A1A1A] bg-white relative overflow-hidden shadow-[8px_8px_0px_0px_#1A1A1A]">
                        <div className="absolute top-4 left-4 font-mono font-bold text-xs border border-[#1A1A1A] px-2 py-1 bg-[#F2F0E9]">
                            FIG 1.0: SWEEP ACTION
                        </div>

                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            <defs>
                                <pattern id="wood-grain" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M0,5 L10,5" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.1"/>
                                </pattern>
                            </defs>
                            
                            {/* Table Surface */}
                            {/* Rotated slightly to match perspective of typical diagrams */}
                            <g transform="translate(50, 50) scale(0.8)">
                                {/* Table Top */}
                                <rect x="0" y="0" width="300" height="300" fill="#F2F0E9" stroke="#1A1A1A" strokeWidth="4" />
                                <rect x="0" y="0" width="300" height="300" fill="url(#wood-grain)" />
                                
                                {/* Trash Bin (Yellow Trough on the Left) */}
                                <g transform="translate(-40, 0)">
                                    <rect x="0" y="0" width="40" height="300" fill="#FFD000" stroke="#1A1A1A" strokeWidth="4" />
                                    <text x="5" y="150" fontFamily="monospace" fontSize="12" fill="#1A1A1A" transform="rotate(-90 20,150)" fontWeight="bold">DEBRIS COLLECTION</text>
                                </g>

                                {/* Paper Balls (Debris) */}
                                <g className="debris-group">
                                    {/* Ball 1 */}
                                    <circle cx="100" cy="80" r="8" fill="white" stroke="#1A1A1A" strokeWidth="2" className="animate-debris-1" />
                                    {/* Ball 2 */}
                                    <circle cx="150" cy="150" r="8" fill="white" stroke="#1A1A1A" strokeWidth="2" className="animate-debris-2" />
                                    {/* Ball 3 */}
                                    <circle cx="120" cy="220" r="8" fill="white" stroke="#1A1A1A" strokeWidth="2" className="animate-debris-3" />
                                </g>

                                {/* The Sweeper Robot (Yellow Bar) */}
                                <g className="animate-sweeper">
                                    {/* The Bar */}
                                    <rect x="260" y="-10" width="30" height="320" fill="#FFD000" stroke="#1A1A1A" strokeWidth="4" rx="4" />
                                    {/* Wheel Housing Top */}
                                    <rect x="255" y="-10" width="40" height="20" fill="#1A1A1A" />
                                    {/* Wheel Housing Bottom */}
                                    <rect x="255" y="290" width="40" height="20" fill="#1A1A1A" />
                                    {/* Wires */}
                                    <path d="M275,10 C275,-30 200,-30 200,0" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
                                </g>
                            </g>
                        </svg>

                        <div className="absolute bottom-0 left-0 w-full border-t-4 border-[#1A1A1A] bg-[#FFD000] p-4 flex justify-between items-center">
                            <div className="font-mono font-bold text-[#1A1A1A]">STATUS: ACTIVE</div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-[#1A1A1A] animate-pulse"></div>
                                <div className="w-3 h-3 border-2 border-[#1A1A1A]"></div>
                                <div className="w-3 h-3 border-2 border-[#1A1A1A]"></div>
                            </div>
                        </div>
                    </div>
                </RetroFadeIn>
            </div>
        </section>
    );
};

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="mb-16 border-b-4 border-[#1A1A1A] pb-6 flex items-end gap-6">
        <div className="w-16 h-16 bg-[#1A1A1A] text-[#FFD000] flex items-center justify-center border-2 border-[#1A1A1A]">
            <Icon size={32} strokeWidth={3} />
        </div>
        <div>
            <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-1">{title}</h2>
            <p className="font-mono text-[#1A1A1A]">{subtitle}</p>
        </div>
    </div>
);

const Overview = () => {
    return (
        <section id="overview" className="py-32 bg-[#F2F0E9] border-b-2 border-[#1A1A1A]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <RetroFadeIn>
                        <div className="bg-white border-4 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A] h-full">
                            <h3 className="font-black text-2xl mb-6 flex items-center gap-3 uppercase">
                                <X size={28} strokeWidth={4} /> The Problem
                            </h3>
                            <p className="font-mono text-lg mb-6 leading-relaxed">
                                Manual desk cleaning is tedious and inefficient. Cluttered workspaces lead to unprofessional environments and distracted focus.
                            </p>
                            <ul className="space-y-4 font-mono font-bold">
                                <li className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-[#1A1A1A]"></span> LABORIOUS
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-[#1A1A1A]"></span> INCOMPLETE
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-[#1A1A1A]"></span> INEFFICIENT
                                </li>
                            </ul>
                        </div>
                    </RetroFadeIn>
                    
                    <RetroFadeIn delay={200}>
                        <div className="bg-[#1A1A1A] text-[#F2F0E9] border-4 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#FFD000] h-full">
                            <h3 className="font-black text-2xl mb-6 text-[#FFD000] flex items-center gap-3 uppercase">
                                <CheckCircle size={28} strokeWidth={4} /> The Solution
                            </h3>
                            <p className="font-mono text-lg mb-6 leading-relaxed">
                                The SmartDesk Auto-Cleaner uses computer vision for real-time tracking and a mechanical sweep system for total debris elimination.
                            </p>
                            <ul className="space-y-4 font-mono font-bold text-[#FFD000]">
                                <li className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-[#FFD000]"></span> AUTO-MONITORING
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-[#FFD000]"></span> PRECISE SWEEP
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-[#FFD000]"></span> ADJUSTABLE WIDTH
                                </li>
                            </ul>
                        </div>
                    </RetroFadeIn>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, step, index }) => (
    <RetroFadeIn delay={index * 100} className="h-full">
        <div className="bg-white border-4 border-[#1A1A1A] p-6 h-full hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#FFD000] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <Icon size={40} strokeWidth={2} />
                <span className="font-black text-4xl text-[#FFD000] stroke-black" style={{WebkitTextStroke: '2px #1A1A1A'}}>0{step}</span>
            </div>
            <h3 className="font-bold text-xl mb-3 uppercase border-b-2 border-[#1A1A1A] pb-2 inline-block">{title}</h3>
            <p className="font-mono text-sm leading-relaxed">{desc}</p>
        </div>
    </RetroFadeIn>
);

const Features = () => {
    const features = [
        { icon: RefreshCw, step: 1, title: "Cleaning Module", desc: "Built-in cleaner storage and sponge. Extendable chassis fits different desk widths." },
        { icon: MousePointer, step: 2, title: "One-Click Ops", desc: "Simple deployment. Pour cleaner, adjust length, activate switch, place bin." },
        { icon: Trash2, step: 3, title: "Sweep & Wheels", desc: "Side sweep module prevents fall-off. Motorized traction system drives forward/back." },
        { icon: Smartphone, step: 4, title: "Smart Control", desc: "Computer vision analysis. App interface for mode selection and status monitoring." }
    ];

    return (
        <section id="features" className="py-32 bg-[#F2F0E9] border-b-2 border-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader icon={Zap} title="System Specs" subtitle="Technical Architecture & Features" />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => <FeatureCard key={i} index={i} {...f} />)}
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ title, goal, challenge, solution, image, index }) => (
    <RetroFadeIn delay={index * 150} className="mb-12 last:mb-0">
        <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-32 shrink-0">
                <div className="font-black text-5xl text-[#1A1A1A] mb-2">0{index + 1}</div>
                <div className="h-4 w-full bg-[#FFD000] border-2 border-[#1A1A1A]"></div>
            </div>
            <div className="grow border-l-4 border-[#1A1A1A] pl-8 pb-2">
                <h3 className="font-black text-3xl uppercase mb-6">{title}</h3>
                
                {/* Image Placeholder */}
                <div className="mb-6 border-4 border-[#1A1A1A] bg-white p-2 shadow-[8px_8px_0px_0px_#1A1A1A] group">
                    <img 
                        src={image} 
                        alt={`Process Snapshot ${index + 1}`} 
                        className="w-full h-48 md:h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 border border-[#1A1A1A]" 
                    />
                    <div className="mt-2 flex justify-between items-center px-2">
                        <span className="font-mono text-xs font-bold text-[#1A1A1A] uppercase">Fig {index + 1}.0</span>
                        <span className="font-mono text-xs text-[#1A1A1A] opacity-50">SOURCE: ARCHIVE</span>
                    </div>
                </div>
                
                <div className="grid gap-6">
                    <div className="bg-white border-2 border-[#1A1A1A] p-4">
                        <span className="font-bold bg-[#1A1A1A] text-white px-2 py-1 text-xs uppercase mb-2 inline-block">Goal</span>
                        <p className="font-mono text-sm">{goal}</p>
                    </div>
                    <div className="bg-white border-2 border-[#1A1A1A] p-4">
                        <span className="font-bold bg-white text-[#1A1A1A] border border-[#1A1A1A] px-2 py-1 text-xs uppercase mb-2 inline-block">Challenge</span>
                        <p className="font-mono text-sm">{challenge}</p>
                    </div>
                    <div className="bg-[#FFD000] border-2 border-[#1A1A1A] p-4 shadow-[4px_4px_0px_0px_#1A1A1A]">
                        <span className="font-bold bg-[#1A1A1A] text-[#FFD000] px-2 py-1 text-xs uppercase mb-2 inline-block">Resolution</span>
                        <p className="font-mono text-sm font-bold">{solution}</p>
                    </div>
                </div>
            </div>
        </div>
    </RetroFadeIn>
);

const Process = () => {
    const steps = [
        {
            title: "Concept & Ideation",
            goal: "Initial System Generation",
            challenge: "Individual part design (wheels, cleaner, slider) lacked integration logic.",
            solution: "Redesigned with the middle stretch unit as the central control chassis.",
            image: "https://placehold.co/600x400/e2e2e2/1A1A1A?text=SKETCH+PHASE"
        },
        {
            title: "Prototype I: Scale",
            goal: "Dimension Verification",
            challenge: "PLA material shrinkage in 3D printing caused assembly failure.",
            solution: "Recalibrated CAD tolerances to account for thermal contraction.",
            image: "https://placehold.co/600x400/e2e2e2/1A1A1A?text=3D+PRINT+TEST"
        },
        {
            title: "Prototype II: Mech",
            goal: "Drive System Testing",
            challenge: "Single-wheel drive unit suffered from sagging and jamming.",
            solution: "Installed stabilizer wheel and integrated physical limit switches.",
            image: "https://placehold.co/600x400/e2e2e2/1A1A1A?text=MECH+ASSEMBLY"
        },
        {
            title: "Final Integration",
            goal: "Automation Logic",
            challenge: "High friction coefficient in sliding mechanism.",
            solution: "Surface finishing (sanding) and specialized cleaning sponge integration.",
            image: "https://placehold.co/600x400/e2e2e2/1A1A1A?text=FINAL+DEVICE"
        }
    ];

    return (
        <section id="process" className="py-32 bg-[#F2F0E9] border-b-2 border-[#1A1A1A]">
            <div className="max-w-4xl mx-auto px-6">
                <SectionHeader icon={Wrench} title="Dev Log" subtitle="Iterative Engineering Process" />
                <div>
                    {steps.map((step, i) => <ProcessStep key={i} index={i} {...step} />)}
                </div>
            </div>
        </section>
    );
};

const TeamMember = ({ name, role, contribution, index, Face }) => (
    <RetroFadeIn delay={index * 100}>
        <div className="bg-white border-4 border-[#1A1A1A] p-0 h-full">
            <div className="bg-[#1A1A1A] p-4 text-center">
                <div className="w-24 h-24 mx-auto bg-[#FFD000] border-2 border-white flex items-center justify-center font-black text-3xl text-[#1A1A1A] overflow-hidden">
                    <Face />
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="font-black text-xl uppercase mb-1">{name}</h3>
                <p className="font-mono text-xs font-bold text-[#1A1A1A] bg-[#FFD000] inline-block px-2 py-1 mb-4 border border-[#1A1A1A]">{role}</p>
                <p className="font-mono text-sm text-left border-t-2 border-[#1A1A1A] pt-4">
                    {contribution}
                </p>
            </div>
        </div>
    </RetroFadeIn>
);

const Team = () => {
    return (
        <section id="team" className="py-32 bg-[#F2F0E9] border-b-2 border-[#1A1A1A]">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader icon={RefreshCw} title="Personnel" subtitle="Team 18 Roster" />
                <div className="grid md:grid-cols-3 gap-8">
                    <TeamMember 
                        index={0}
                        name="Anthony Chen"
                        role="Mechanisms & Integration"
                        contribution="Engineered the extendable sliding structure housing main electronics. Designed detergent reservoir and sponge cleaning module."
                        Face={FaceAnthony}
                    />
                    <TeamMember 
                        index={1}
                        name="Elina Zhao"
                        role="Waste Management"
                        contribution="Designed side trash sweep module to prevent debris fall-off. Created detachable debris collection bin."
                        Face={FaceElina}
                    />
                    <TeamMember 
                        index={2}
                        name="Muhammad Alan Nur"
                        role="Drive & Motor Assembly"
                        contribution="Designed motorized wheel assembly and enclosure. Engineered drive train for automated traversal."
                        Face={FaceAlan}
                    />
                </div>
            </div>
        </section>
    );
};

const Future = () => {
     return (
        <section className="py-24 bg-[#1A1A1A] text-[#F2F0E9]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-[#FFD000]">Future Roadmap</h2>
                    <div className="h-1 w-24 bg-[#F2F0E9] mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {[
                        { title: "MFG", text: "Injection molding (ABS) for durability/cost." },
                        { title: "PCB", text: "Custom PCB integration to replace manual wiring." },
                        { title: "PROD", text: "Industrial die-cutting for sponge production." }
                    ].map((item, i) => (
                        <div key={i} className="border-2 border-[#F2F0E9] p-6 hover:bg-[#F2F0E9] hover:text-[#1A1A1A] transition-colors group">
                            <h4 className="font-black text-xl mb-4 text-[#FFD000] group-hover:text-[#1A1A1A]">{item.title}</h4>
                            <p className="font-mono text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Video = () => {
    return (
        <section id="video" className="py-32 bg-[#F2F0E9] border-b-2 border-[#1A1A1A]">
             <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-black uppercase mb-12">System Demo</h2>
                <div className="w-full bg-[#1A1A1A] p-2 shadow-[12px_12px_0px_0px_#FFD000]">
                    <div className="aspect-video w-full bg-[#F2F0E9] relative overflow-hidden border-2 border-[#F2F0E9]">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/200L2p9E47w" 
                            title="SmartDesk Auto Demo" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
             </div>
        </section>
    )
}

export default function App() {
    return (
        <div className="min-h-screen bg-[#F2F0E9] text-[#1A1A1A] font-sans selection:bg-[#FFD000] selection:text-[#1A1A1A]">
            <style>{`
                /* Retro Animations */
                @keyframes sweeperMove {
                    0% { transform: translateX(0); }
                    40% { transform: translateX(-240px); }
                    60% { transform: translateX(-240px); }
                    100% { transform: translateX(0); }
                }
                .animate-sweeper {
                    animation: sweeperMove 4s ease-in-out infinite;
                }
                
                @keyframes debris1 {
                    0%, 15% { transform: translateX(0); opacity: 1; }
                    40% { transform: translateX(-140px); opacity: 1; } /* Hit by sweeper */
                    45% { transform: translate(-140px, 0); opacity: 0; } /* Falls into bin (invisible) */
                    100% { transform: translateX(0); opacity: 0; }
                }
                .animate-debris-1 { animation: debris1 4s linear infinite; }

                @keyframes debris2 {
                    0%, 20% { transform: translateX(0); opacity: 1; }
                    40% { transform: translateX(-190px); opacity: 1; }
                    45% { transform: translate(-190px, 0); opacity: 0; }
                    100% { transform: translateX(0); opacity: 0; }
                }
                .animate-debris-2 { animation: debris2 4s linear infinite; }

                @keyframes debris3 {
                    0%, 25% { transform: translateX(0); opacity: 1; }
                    40% { transform: translateX(-160px); opacity: 1; }
                    45% { transform: translate(-160px, 0); opacity: 0; }
                    100% { transform: translateX(0); opacity: 0; }
                }
                .animate-debris-3 { animation: debris3 4s linear infinite; }
                
                html { scroll-behavior: smooth; }
            `}</style>
            <Nav />
            <Hero />
            <Overview />
            <Video />
            <Features />
            <Process />
            <Team />
            <Future />
            
            <footer className="bg-[#F2F0E9] py-12 text-center border-t-4 border-[#1A1A1A]">
                <p className="font-mono text-sm font-bold text-[#1A1A1A]">
                    © 2025 TEAM 18 // ENGINEERING DEPT. <br/>
                    <span className="text-xs mt-2 block opacity-50">SYSTEM VERSION 1.0</span>
                </p>
            </footer>
        </div>
    );
};
