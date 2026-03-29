import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface MusicPlayerProps {
	streamUrl?: string;
	trackTitle?: string;
	artist?: string;
}

const DEFAULT_STREAM = "https://ice1.somafm.com/grooves-128-mp3";

export function MusicPlayer({
	streamUrl = DEFAULT_STREAM,
	trackTitle = "Midnight Drive",
	artist = "Pablo FM",
}: MusicPlayerProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [playing, setPlaying] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const toggle = useCallback(async () => {
		const el = audioRef.current;
		if (!el) return;
		setError(null);
		try {
			if (playing) {
				el.pause();
				setPlaying(false);
			} else {
				await el.play();
				setPlaying(true);
			}
		} catch {
			setError("Playback blocked or stream unavailable.");
			setPlaying(false);
		}
	}, [playing]);

	useEffect(() => {
		const el = audioRef.current;
		if (!el) return;
		const onPause = () => setPlaying(false);
		const onPlay = () => setPlaying(true);
		el.addEventListener("pause", onPause);
		el.addEventListener("play", onPlay);
		return () => {
			el.removeEventListener("pause", onPause);
			el.removeEventListener("play", onPlay);
		};
	}, []);

	return (
		<motion.div
			className="relative w-full max-w-lg"
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-neon-pink/40 via-neon-cyan/25 to-neon-pink/30 blur-xl"
				animate={{ opacity: playing ? [0.55, 0.95, 0.55] : 0.35, scale: playing ? [1, 1.02, 1] : 1 }}
				transition={{
					duration: playing ? 3.5 : 0.6,
					repeat: playing ? Infinity : 0,
					ease: "easeInOut",
				}}
			/>
			<Card className="relative overflow-hidden border-neon-pink/30 bg-card/80">
				<CardHeader className="pb-2">
					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-2">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-pink/15 text-neon-pink">
								<Radio className="h-4 w-4" aria-hidden />
							</span>
							<div>
								<CardTitle className="font-display text-lg text-foreground sm:text-xl">
									Now Playing
								</CardTitle>
								<CardDescription className="text-xs uppercase tracking-widest text-neon-cyan/90">
									Live stream
								</CardDescription>
							</div>
						</div>
						<motion.span
							className="rounded-full border border-neon-pink/40 bg-neon-pink/10 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-neon-pink"
							animate={{ scale: playing ? [1, 1.05, 1] : 1 }}
							transition={{ duration: 1.2, repeat: playing ? Infinity : 0 }}
						>
							On air
						</motion.span>
					</div>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-1">
						<p className="font-display text-lg font-semibold tracking-tight text-foreground">
							{trackTitle}
						</p>
						<p className="text-sm text-muted-foreground">{artist}</p>
					</div>
					<div className="flex items-center gap-3">
						<Button
							type="button"
							variant="neon"
							size="lg"
							className="shrink-0 rounded-full px-5"
							onClick={() => void toggle()}
							aria-pressed={playing}
							aria-label={playing ? "Pause stream" : "Play stream"}
						>
							<AnimatePresence mode="wait" initial={false}>
								{playing ? (
									<motion.span
										key="pause"
										className="flex items-center gap-2"
										initial={{ opacity: 0, x: -6 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 6 }}
										transition={{ duration: 0.15 }}
									>
										<Pause className="h-5 w-5" />
										Pause
									</motion.span>
								) : (
									<motion.span
										key="play"
										className="flex items-center gap-2"
										initial={{ opacity: 0, x: -6 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 6 }}
										transition={{ duration: 0.15 }}
									>
										<Play className="h-5 w-5" />
										Play
									</motion.span>
								)}
							</AnimatePresence>
						</Button>
						<div className="min-w-0 flex-1">
							<div
								className={cn(
									"h-1.5 overflow-hidden rounded-full bg-muted",
									playing && "shadow-[0_0_12px_hsl(var(--neon-cyan)/0.5)]",
								)}
							>
								<motion.div
									className="h-full rounded-full bg-gradient-to-r from-neon-pink to-neon-cyan"
									initial={{ width: "12%" }}
									animate={{
										width: playing ? ["20%", "85%", "45%", "70%", "30%"] : "12%",
									}}
									transition={{
										duration: playing ? 8 : 0.5,
										repeat: playing ? Infinity : 0,
										ease: "easeInOut",
									}}
								/>
							</div>
							<p className="mt-1.5 truncate text-xs text-muted-foreground">
								{playing ? "Streaming…" : "Press play to tune in"}
							</p>
						</div>
					</div>
					{error ? (
						<p className="text-xs text-destructive" role="alert">
							{error}
						</p>
					) : null}
					<audio ref={audioRef} src={streamUrl} preload="none" />
				</CardContent>
			</Card>
		</motion.div>
	);
}
