

import CpsTestUltimateGuide, { frontmatter as CpsTestFrontmatter } from '@/app/blog/content/cps-test-ultimate-guide.mdx';
import JitterClickTestGuide, { frontmatter as JitterClickFrontmatter } from '@/app/blog/content/jitter-click-test-guide.mdx';
import KohiClickTestGuide, { frontmatter as KohiClickFrontmatter } from '@/app/blog/content/kohi-click-test-guide.mdx';
import ButterflyClickTestGuide, { frontmatter as ButterflyClickFrontmatter } from '@/app/blog/content/butterfly-click-test-guide.mdx';
import AimTrainerGuide, { frontmatter as AimTrainerFrontmatter } from '@/app/blog/content/aim-trainer-guide.mdx';
import SpacebarTestGuide, { frontmatter as SpacebarTestFrontmatter } from '@/app/blog/content/spacebar-test-guide.mdx';
import StimulationClickerGuide, { frontmatter as StimulationClickerFrontmatter } from '@/app/blog/content/stimulation-clicker-guide.mdx';
import TypingTestGuide, { frontmatter as TypingTestFrontmatter } from '@/app/blog/content/typing-test-guide.mdx';
import CoreballGameGuide, { frontmatter as CoreballGameFrontmatter } from '@/app/blog/content/coreball-game-guide.mdx';
import Cupcake2048Guide, { frontmatter as Cupcake2048Frontmatter } from '@/app/blog/content/cupcake-2048-guide.mdx';
import JigsawPuzzleGuide, { frontmatter as JigsawPuzzleFrontmatter } from '@/app/blog/content/jigsaw-puzzle-guide.mdx';
import SlidingPuzzleGuide, { frontmatter as SlidingPuzzleFrontmatter } from '@/app/blog/content/sliding-puzzle-guide.mdx';
import ReactionTimeTestGuide, { frontmatter as ReactionTimeTestFrontmatter } from '@/app/blog/content/reaction-time-test-guide.mdx';
import MemoryGameGuide, { frontmatter as MemoryGameFrontmatter } from '@/app/blog/content/memory-game-guide.mdx';
import NumberMemoryTestGuide, { frontmatter as NumberMemoryTestFrontmatter } from '@/app/blog/content/number-memory-test-guide.mdx';
import SequenceMemoryTestGuide, { frontmatter as SequenceMemoryTestFrontmatter } from '@/app/blog/content/sequence-memory-test-guide.mdx';
import ChimpTestGuide, { frontmatter as ChimpTestFrontmatter } from '@/app/blog/content/chimp-test-guide.mdx';
import VerbalMemoryTestGuide, { frontmatter as VerbalMemoryTestFrontmatter } from '@/app/blog/content/verbal-memory-test-guide.mdx';
import VisualMemoryTestGuide, { frontmatter as VisualMemoryTestFrontmatter } from '@/app/blog/content/visual-memory-test-guide.mdx';
import WordMemoryTestGuide, { frontmatter as WordMemoryTestFrontmatter } from '@/app/blog/content/word-memory-test-guide.mdx';
import MathQuizGuide, { frontmatter as MathQuizFrontmatter } from '@/app/blog/content/math-quiz-guide.mdx';
import WordScrambleGuide, { frontmatter as WordScrambleFrontmatter } from '@/app/blog/content/word-scramble-guide.mdx';
import DrawingPadGuide, { frontmatter as DrawingPadFrontmatter } from '@/app/blog/content/drawing-pad-guide.mdx';
import BlockBuilderGuide, { frontmatter as BlockBuilderFrontmatter } from '@/app/blog/content/block-builder-guide.mdx';
import ConnectTheDotsGuide, { frontmatter as ConnectTheDotsFrontmatter } from '@/app/blog/content/connect-the-dots-guide.mdx';

// New blog posts
import WhatIsCpsBeginnerGuide, { frontmatter as WhatIsCpsFrontmatter } from '@/app/blog/content/what-is-cps-beginner-guide.mdx';
import HowToIncreaseCps, { frontmatter as HowToIncreaseCpsFrontmatter } from '@/app/blog/content/how-to-increase-cps.mdx';
import BestMouseForCps, { frontmatter as BestMouseForCpsFrontmatter } from '@/app/blog/content/best-mouse-for-cps-gaming.mdx';
import DragVsButterfly, { frontmatter as DragVsButterflyFrontmatter } from '@/app/blog/content/drag-clicking-vs-butterfly-clicking.mdx';
import AverageCps, { frontmatter as AverageCpsFrontmatter } from '@/app/blog/content/how-fast-is-average-cps.mdx';
import OpticalVsMechanical, { frontmatter as OpticalVsMechanicalFrontmatter } from '@/app/blog/content/optical-vs-mechanical-switches-gaming-cps.mdx';
import MouseDebounceGuide, { frontmatter as MouseDebounceFrontmatter } from '@/app/blog/content/mouse-debounce-time-guide-lower-cps.mdx';
import BestMouseGripGuide, { frontmatter as BestMouseGripFrontmatter } from '@/app/blog/content/best-mouse-grip-styles-cps-aim.mdx';
import RobloxClickingGuide, { frontmatter as RobloxClickingFrontmatter } from '@/app/blog/content/roblox-blade-ball-bedwars-clicking-guide.mdx';
import MonitorRefreshRateGuide, { frontmatter as MonitorRefreshRateFrontmatter } from '@/app/blog/content/monitor-refresh-rate-human-reaction-time.mdx';
import TrainReactionTimeGuide, { frontmatter as TrainReactionTimeFrontmatter } from '@/app/blog/content/how-to-train-reaction-time-esports.mdx';
import StroopEffectGuide, { frontmatter as StroopEffectFrontmatter } from '@/app/blog/content/stroop-effect-cognitive-interference-test.mdx';
import Type100WpmGuide, { frontmatter as Type100WpmFrontmatter } from '@/app/blog/content/how-to-type-100-wpm-progression-guide.mdx';
import KeyboardSwitchesGuide, { frontmatter as KeyboardSwitchesFrontmatter } from '@/app/blog/content/linear-vs-tactile-vs-clicky-switches-gaming.mdx';
import SpacebarPhysicsGuide, { frontmatter as SpacebarPhysicsFrontmatter } from '@/app/blog/content/spacebar-actuation-physics-bhop-guide.mdx';
import KyotoChimpGuide, { frontmatter as KyotoChimpFrontmatter } from '@/app/blog/content/kyoto-chimp-test-working-memory-science.mdx';
import MillerLawGuide, { frontmatter as MillerLawFrontmatter } from '@/app/blog/content/miller-law-digit-span-working-memory.mdx';
import GamerCarpalTunnelGuide, { frontmatter as GamerCarpalTunnelFrontmatter } from '@/app/blog/content/gamer-guide-preventing-carpal-tunnel-rsi.mdx';


export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    content: React.ComponentType;
}

export const postMetas: Record<string, Omit<Post, 'slug' | 'content'>> = {
    'cps-test-ultimate-guide': {
        title: CpsTestFrontmatter.title,
        description: CpsTestFrontmatter.description,
        date: '2026-10-15',
    },
    'jitter-click-test-guide': {
        title: JitterClickFrontmatter.title,
        description: JitterClickFrontmatter.description,
        date: '2026-10-12',
    },
    'kohi-click-test-guide': {
        title: KohiClickFrontmatter.title,
        description: KohiClickFrontmatter.description,
        date: '2026-10-10',
    },
    'butterfly-click-test-guide': {
        title: ButterflyClickFrontmatter.title,
        description: ButterflyClickFrontmatter.description,
        date: '2026-10-08',
    },
    'aim-trainer-guide': {
        title: AimTrainerFrontmatter.title,
        description: AimTrainerFrontmatter.description,
        date: '2026-10-05',
    },
    'spacebar-test-guide': {
        title: SpacebarTestFrontmatter.title,
        description: SpacebarTestFrontmatter.description,
        date: '2026-09-29',
    },
    'stimulation-clicker-guide': {
        title: StimulationClickerFrontmatter.title,
        description: StimulationClickerFrontmatter.description,
        date: '2026-09-02',
    },
    'typing-test-guide': {
        title: TypingTestFrontmatter.title,
        description: TypingTestFrontmatter.description,
        date: '2026-09-26',
    },
    'coreball-game-guide': {
        title: CoreballGameFrontmatter.title,
        description: CoreballGameFrontmatter.description,
        date: '2026-08-28',
    },
    'cupcake-2048-guide': {
        title: Cupcake2048Frontmatter.title,
        description: Cupcake2048Frontmatter.description,
        date: '2026-08-30',
    },
    'jigsaw-puzzle-guide': {
        title: JigsawPuzzleFrontmatter.title,
        description: JigsawPuzzleFrontmatter.description,
        date: '2026-08-26',
    },
    'sliding-puzzle-guide': {
        title: SlidingPuzzleFrontmatter.title,
        description: SlidingPuzzleFrontmatter.description,
        date: '2026-08-24',
    },
    'reaction-time-test-guide': {
        title: ReactionTimeTestFrontmatter.title,
        description: ReactionTimeTestFrontmatter.description,
        date: '2026-10-02',
    },
    'memory-game-guide': {
        title: MemoryGameFrontmatter.title,
        description: MemoryGameFrontmatter.description,
        date: '2026-09-05',
    },
    'number-memory-test-guide': {
        title: NumberMemoryTestFrontmatter.title,
        description: NumberMemoryTestFrontmatter.description,
        date: '2026-09-20',
    },
    'sequence-memory-test-guide': {
        title: SequenceMemoryTestFrontmatter.title,
        description: SequenceMemoryTestFrontmatter.description,
        date: '2026-09-17',
    },
    'chimp-test-guide': {
        title: ChimpTestFrontmatter.title,
        description: ChimpTestFrontmatter.description,
        date: '2026-09-23',
    },
    'verbal-memory-test-guide': {
        title: VerbalMemoryTestFrontmatter.title,
        description: VerbalMemoryTestFrontmatter.description,
        date: '2026-09-11',
    },
    'visual-memory-test-guide': {
        title: VisualMemoryTestFrontmatter.title,
        description: VisualMemoryTestFrontmatter.description,
        date: '2026-09-14',
    },
    'word-memory-test-guide': {
        title: WordMemoryTestFrontmatter.title,
        description: WordMemoryTestFrontmatter.description,
        date: '2026-09-08',
    },
    'math-quiz-guide': {
        title: MathQuizFrontmatter.title,
        description: MathQuizFrontmatter.description,
        date: '2026-08-22',
    },
    'word-scramble-guide': {
        title: WordScrambleFrontmatter.title,
        description: WordScrambleFrontmatter.description,
        date: '2026-08-20',
    },
    'drawing-pad-guide': {
        title: DrawingPadFrontmatter.title,
        description: DrawingPadFrontmatter.description,
        date: '2026-08-18',
    },
    'block-builder-guide': {
        title: BlockBuilderFrontmatter.title,
        description: BlockBuilderFrontmatter.description,
        date: '2026-08-16',
    },
    'connect-the-dots-guide': {
        title: ConnectTheDotsFrontmatter.title,
        description: ConnectTheDotsFrontmatter.description,
        date: '2026-08-14',
    },
    'what-is-cps-beginner-guide': {
        title: WhatIsCpsFrontmatter.title,
        description: WhatIsCpsFrontmatter.description,
        date: '2026-10-18',
    },
    'how-to-increase-cps': {
        title: HowToIncreaseCpsFrontmatter.title,
        description: HowToIncreaseCpsFrontmatter.description,
        date: '2026-10-26',
    },
    'best-mouse-for-cps-gaming': {
        title: BestMouseForCpsFrontmatter.title,
        description: BestMouseForCpsFrontmatter.description,
        date: '2026-10-24',
    },
    'drag-clicking-vs-butterfly-clicking': {
        title: DragVsButterflyFrontmatter.title,
        description: DragVsButterflyFrontmatter.description,
        date: '2026-10-22',
    },
    'how-fast-is-average-cps': {
        title: AverageCpsFrontmatter.title,
        description: AverageCpsFrontmatter.description,
        date: '2026-10-20',
    },
    'optical-vs-mechanical-switches-gaming-cps': {
        title: OpticalVsMechanicalFrontmatter.title,
        description: OpticalVsMechanicalFrontmatter.description,
        date: '2026-10-29',
    },
    'mouse-debounce-time-guide-lower-cps': {
        title: MouseDebounceFrontmatter.title,
        description: MouseDebounceFrontmatter.description,
        date: '2026-10-30',
    },
    'best-mouse-grip-styles-cps-aim': {
        title: BestMouseGripFrontmatter.title,
        description: BestMouseGripFrontmatter.description,
        date: '2026-10-31',
    },
    'roblox-blade-ball-bedwars-clicking-guide': {
        title: RobloxClickingFrontmatter.title,
        description: RobloxClickingFrontmatter.description,
        date: '2026-11-01',
    },
    'monitor-refresh-rate-human-reaction-time': {
        title: MonitorRefreshRateFrontmatter.title,
        description: MonitorRefreshRateFrontmatter.description,
        date: '2026-11-02',
    },
    'how-to-train-reaction-time-esports': {
        title: TrainReactionTimeFrontmatter.title,
        description: TrainReactionTimeFrontmatter.description,
        date: '2026-11-03',
    },
    'stroop-effect-cognitive-interference-test': {
        title: StroopEffectFrontmatter.title,
        description: StroopEffectFrontmatter.description,
        date: '2026-11-04',
    },
    'how-to-type-100-wpm-progression-guide': {
        title: Type100WpmFrontmatter.title,
        description: Type100WpmFrontmatter.description,
        date: '2026-11-05',
    },
    'linear-vs-tactile-vs-clicky-switches-gaming': {
        title: KeyboardSwitchesFrontmatter.title,
        description: KeyboardSwitchesFrontmatter.description,
        date: '2026-11-06',
    },
    'spacebar-actuation-physics-bhop-guide': {
        title: SpacebarPhysicsFrontmatter.title,
        description: SpacebarPhysicsFrontmatter.description,
        date: '2026-11-07',
    },
    'kyoto-chimp-test-working-memory-science': {
        title: KyotoChimpFrontmatter.title,
        description: KyotoChimpFrontmatter.description,
        date: '2026-11-08',
    },
    'miller-law-digit-span-working-memory': {
        title: MillerLawFrontmatter.title,
        description: MillerLawFrontmatter.description,
        date: '2026-11-09',
    },
    'gamer-guide-preventing-carpal-tunnel-rsi': {
        title: GamerCarpalTunnelFrontmatter.title,
        description: GamerCarpalTunnelFrontmatter.description,
        date: '2026-11-10',
    },
};

export const allPosts: Post[] = [
    {
        slug: 'cps-test-ultimate-guide',
        title: postMetas['cps-test-ultimate-guide'].title,
        description: postMetas['cps-test-ultimate-guide'].description,
        date: postMetas['cps-test-ultimate-guide'].date,
        content: CpsTestUltimateGuide,
    },
    {
        slug: 'jitter-click-test-guide',
        title: postMetas['jitter-click-test-guide'].title,
        description: postMetas['jitter-click-test-guide'].description,
        date: postMetas['jitter-click-test-guide'].date,
        content: JitterClickTestGuide,
    },
    {
        slug: 'kohi-click-test-guide',
        title: postMetas['kohi-click-test-guide'].title,
        description: postMetas['kohi-click-test-guide'].description,
        date: postMetas['kohi-click-test-guide'].date,
        content: KohiClickTestGuide,
    },
    {
        slug: 'butterfly-click-test-guide',
        title: postMetas['butterfly-click-test-guide'].title,
        description: postMetas['butterfly-click-test-guide'].description,
        date: postMetas['butterfly-click-test-guide'].date,
        content: ButterflyClickTestGuide,
    },
    {
        slug: 'aim-trainer-guide',
        title: postMetas['aim-trainer-guide'].title,
        description: postMetas['aim-trainer-guide'].description,
        date: postMetas['aim-trainer-guide'].date,
        content: AimTrainerGuide,
    },
    {
        slug: 'spacebar-test-guide',
        title: postMetas['spacebar-test-guide'].title,
        description: postMetas['spacebar-test-guide'].description,
        date: postMetas['spacebar-test-guide'].date,
        content: SpacebarTestGuide,
    },
    {
        slug: 'stimulation-clicker-guide',
        title: postMetas['stimulation-clicker-guide'].title,
        description: postMetas['stimulation-clicker-guide'].description,
        date: postMetas['stimulation-clicker-guide'].date,
        content: StimulationClickerGuide,
    },
    {
        slug: 'typing-test-guide',
        title: postMetas['typing-test-guide'].title,
        description: postMetas['typing-test-guide'].description,
        date: postMetas['typing-test-guide'].date,
        content: TypingTestGuide,
    },
    {
        slug: 'coreball-game-guide',
        title: postMetas['coreball-game-guide'].title,
        description: postMetas['coreball-game-guide'].description,
        date: postMetas['coreball-game-guide'].date,
        content: CoreballGameGuide,
    },
    {
        slug: 'cupcake-2048-guide',
        title: postMetas['cupcake-2048-guide'].title,
        description: postMetas['cupcake-2048-guide'].description,
        date: postMetas['cupcake-2048-guide'].date,
        content: Cupcake2048Guide,
    },
    {
        slug: 'jigsaw-puzzle-guide',
        title: postMetas['jigsaw-puzzle-guide'].title,
        description: postMetas['jigsaw-puzzle-guide'].description,
        date: postMetas['jigsaw-puzzle-guide'].date,
        content: JigsawPuzzleGuide,
    },
    {
        slug: 'sliding-puzzle-guide',
        title: postMetas['sliding-puzzle-guide'].title,
        description: postMetas['sliding-puzzle-guide'].description,
        date: postMetas['sliding-puzzle-guide'].date,
        content: SlidingPuzzleGuide,
    },
    {
        slug: 'reaction-time-test-guide',
        title: postMetas['reaction-time-test-guide'].title,
        description: postMetas['reaction-time-test-guide'].description,
        date: postMetas['reaction-time-test-guide'].date,
        content: ReactionTimeTestGuide,
    },
    {
        slug: 'memory-game-guide',
        title: postMetas['memory-game-guide'].title,
        description: postMetas['memory-game-guide'].description,
        date: postMetas['memory-game-guide'].date,
        content: MemoryGameGuide,
    },
    {
        slug: 'number-memory-test-guide',
        title: postMetas['number-memory-test-guide'].title,
        description: postMetas['number-memory-test-guide'].description,
        date: postMetas['number-memory-test-guide'].date,
        content: NumberMemoryTestGuide,
    },
    {
        slug: 'sequence-memory-test-guide',
        title: postMetas['sequence-memory-test-guide'].title,
        description: postMetas['sequence-memory-test-guide'].description,
        date: postMetas['sequence-memory-test-guide'].date,
        content: SequenceMemoryTestGuide,
    },
    {
        slug: 'chimp-test-guide',
        title: postMetas['chimp-test-guide'].title,
        description: postMetas['chimp-test-guide'].description,
        date: postMetas['chimp-test-guide'].date,
        content: ChimpTestGuide,
    },
    {
        slug: 'verbal-memory-test-guide',
        title: postMetas['verbal-memory-test-guide'].title,
        description: postMetas['verbal-memory-test-guide'].description,
        date: postMetas['verbal-memory-test-guide'].date,
        content: VerbalMemoryTestGuide,
    },
    {
        slug: 'visual-memory-test-guide',
        title: postMetas['visual-memory-test-guide'].title,
        description: postMetas['visual-memory-test-guide'].description,
        date: postMetas['visual-memory-test-guide'].date,
        content: VisualMemoryTestGuide,
    },
    {
        slug: 'word-memory-test-guide',
        title: postMetas['word-memory-test-guide'].title,
        description: postMetas['word-memory-test-guide'].description,
        date: postMetas['word-memory-test-guide'].date,
        content: WordMemoryTestGuide,
    },
    {
        slug: 'math-quiz-guide',
        title: postMetas['math-quiz-guide'].title,
        description: postMetas['math-quiz-guide'].description,
        date: postMetas['math-quiz-guide'].date,
        content: MathQuizGuide,
    },
    {
        slug: 'word-scramble-guide',
        title: postMetas['word-scramble-guide'].title,
        description: postMetas['word-scramble-guide'].description,
        date: postMetas['word-scramble-guide'].date,
        content: WordScrambleGuide,
    },
    {
        slug: 'drawing-pad-guide',
        title: postMetas['drawing-pad-guide'].title,
        description: postMetas['drawing-pad-guide'].description,
        date: postMetas['drawing-pad-guide'].date,
        content: DrawingPadGuide,
    },
    {
        slug: 'block-builder-guide',
        title: postMetas['block-builder-guide'].title,
        description: postMetas['block-builder-guide'].description,
        date: postMetas['block-builder-guide'].date,
        content: BlockBuilderGuide,
    },
    {
        slug: 'connect-the-dots-guide',
        title: postMetas['connect-the-dots-guide'].title,
        description: postMetas['connect-the-dots-guide'].description,
        date: postMetas['connect-the-dots-guide'].date,
        content: ConnectTheDotsGuide,
    },
    {
        slug: 'what-is-cps-beginner-guide',
        title: postMetas['what-is-cps-beginner-guide'].title,
        description: postMetas['what-is-cps-beginner-guide'].description,
        date: postMetas['what-is-cps-beginner-guide'].date,
        content: WhatIsCpsBeginnerGuide,
    },
    {
        slug: 'how-to-increase-cps',
        title: postMetas['how-to-increase-cps'].title,
        description: postMetas['how-to-increase-cps'].description,
        date: postMetas['how-to-increase-cps'].date,
        content: HowToIncreaseCps,
    },
    {
        slug: 'best-mouse-for-cps-gaming',
        title: postMetas['best-mouse-for-cps-gaming'].title,
        description: postMetas['best-mouse-for-cps-gaming'].description,
        date: postMetas['best-mouse-for-cps-gaming'].date,
        content: BestMouseForCps,
    },
    {
        slug: 'drag-clicking-vs-butterfly-clicking',
        title: postMetas['drag-clicking-vs-butterfly-clicking'].title,
        description: postMetas['drag-clicking-vs-butterfly-clicking'].description,
        date: postMetas['drag-clicking-vs-butterfly-clicking'].date,
        content: DragVsButterfly,
    },
    {
        slug: 'how-fast-is-average-cps',
        title: postMetas['how-fast-is-average-cps'].title,
        description: postMetas['how-fast-is-average-cps'].description,
        date: postMetas['how-fast-is-average-cps'].date,
        content: AverageCps,
    },
    {
        slug: 'optical-vs-mechanical-switches-gaming-cps',
        title: postMetas['optical-vs-mechanical-switches-gaming-cps'].title,
        description: postMetas['optical-vs-mechanical-switches-gaming-cps'].description,
        date: postMetas['optical-vs-mechanical-switches-gaming-cps'].date,
        content: OpticalVsMechanical,
    },
    {
        slug: 'mouse-debounce-time-guide-lower-cps',
        title: postMetas['mouse-debounce-time-guide-lower-cps'].title,
        description: postMetas['mouse-debounce-time-guide-lower-cps'].description,
        date: postMetas['mouse-debounce-time-guide-lower-cps'].date,
        content: MouseDebounceGuide,
    },
    {
        slug: 'best-mouse-grip-styles-cps-aim',
        title: postMetas['best-mouse-grip-styles-cps-aim'].title,
        description: postMetas['best-mouse-grip-styles-cps-aim'].description,
        date: postMetas['best-mouse-grip-styles-cps-aim'].date,
        content: BestMouseGripGuide,
    },
    {
        slug: 'roblox-blade-ball-bedwars-clicking-guide',
        title: postMetas['roblox-blade-ball-bedwars-clicking-guide'].title,
        description: postMetas['roblox-blade-ball-bedwars-clicking-guide'].description,
        date: postMetas['roblox-blade-ball-bedwars-clicking-guide'].date,
        content: RobloxClickingGuide,
    },
    {
        slug: 'monitor-refresh-rate-human-reaction-time',
        title: postMetas['monitor-refresh-rate-human-reaction-time'].title,
        description: postMetas['monitor-refresh-rate-human-reaction-time'].description,
        date: postMetas['monitor-refresh-rate-human-reaction-time'].date,
        content: MonitorRefreshRateGuide,
    },
    {
        slug: 'how-to-train-reaction-time-esports',
        title: postMetas['how-to-train-reaction-time-esports'].title,
        description: postMetas['how-to-train-reaction-time-esports'].description,
        date: postMetas['how-to-train-reaction-time-esports'].date,
        content: TrainReactionTimeGuide,
    },
    {
        slug: 'stroop-effect-cognitive-interference-test',
        title: postMetas['stroop-effect-cognitive-interference-test'].title,
        description: postMetas['stroop-effect-cognitive-interference-test'].description,
        date: postMetas['stroop-effect-cognitive-interference-test'].date,
        content: StroopEffectGuide,
    },
    {
        slug: 'how-to-type-100-wpm-progression-guide',
        title: postMetas['how-to-type-100-wpm-progression-guide'].title,
        description: postMetas['how-to-type-100-wpm-progression-guide'].description,
        date: postMetas['how-to-type-100-wpm-progression-guide'].date,
        content: Type100WpmGuide,
    },
    {
        slug: 'linear-vs-tactile-vs-clicky-switches-gaming',
        title: postMetas['linear-vs-tactile-vs-clicky-switches-gaming'].title,
        description: postMetas['linear-vs-tactile-vs-clicky-switches-gaming'].description,
        date: postMetas['linear-vs-tactile-vs-clicky-switches-gaming'].date,
        content: KeyboardSwitchesGuide,
    },
    {
        slug: 'spacebar-actuation-physics-bhop-guide',
        title: postMetas['spacebar-actuation-physics-bhop-guide'].title,
        description: postMetas['spacebar-actuation-physics-bhop-guide'].description,
        date: postMetas['spacebar-actuation-physics-bhop-guide'].date,
        content: SpacebarPhysicsGuide,
    },
    {
        slug: 'kyoto-chimp-test-working-memory-science',
        title: postMetas['kyoto-chimp-test-working-memory-science'].title,
        description: postMetas['kyoto-chimp-test-working-memory-science'].description,
        date: postMetas['kyoto-chimp-test-working-memory-science'].date,
        content: KyotoChimpGuide,
    },
    {
        slug: 'miller-law-digit-span-working-memory',
        title: postMetas['miller-law-digit-span-working-memory'].title,
        description: postMetas['miller-law-digit-span-working-memory'].description,
        date: postMetas['miller-law-digit-span-working-memory'].date,
        content: MillerLawGuide,
    },
    {
        slug: 'gamer-guide-preventing-carpal-tunnel-rsi',
        title: postMetas['gamer-guide-preventing-carpal-tunnel-rsi'].title,
        description: postMetas['gamer-guide-preventing-carpal-tunnel-rsi'].description,
        date: postMetas['gamer-guide-preventing-carpal-tunnel-rsi'].date,
        content: GamerCarpalTunnelGuide,
    },
];

