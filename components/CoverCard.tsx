import * as React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Pattern } from '../constants/Pattern';
import { slug } from '../utils/slug';

interface CoverCardProps {
    pattern: Pattern;
}

const CoverList = {
    // A
    [Pattern.Accordion]: dynamic(() => import('../patterns/accordion/Cover')),
    [Pattern.ArrowButtons]: dynamic(() => import('../patterns/arrow-buttons/Cover')),
    [Pattern.Avatar]: dynamic(() => import('../patterns/avatar/Cover')),
    [Pattern.AvatarList]: dynamic(() => import('../patterns/avatar-list/Cover')),
    // B
    [Pattern.Badge]: dynamic(() => import('../patterns/badge/Cover')),
    [Pattern.Breadcrumb]: dynamic(() => import('../patterns/breadcrumb/Cover')),
    [Pattern.ButtonWithIcon]: dynamic(() => import('../patterns/button-with-icon/Cover')),
    // C
    [Pattern.Card]: dynamic(() => import('../patterns/card/Cover')),
    [Pattern.CardLayout]: dynamic(() => import('../patterns/card-layout/Cover')),
    [Pattern.Centering]: dynamic(() => import('../patterns/centering/Cover')),
    [Pattern.Chip]: dynamic(() => import('../patterns/chip/Cover')),
    [Pattern.CircularNavigation]: dynamic(() => import('../patterns/circular-navigation/Cover')),
    [Pattern.CloseButton]: dynamic(() => import('../patterns/close-button/Cover')),
    [Pattern.ColorSwatch]: dynamic(() => import('../patterns/color-swatch/Cover')),
    [Pattern.ConcaveCorners]: dynamic(() => import('../patterns/concave-corners/Cover')),
    [Pattern.CookieBanner]: dynamic(() => import('../patterns/cookie-banner/Cover')),
    [Pattern.CornerRibbon]: dynamic(() => import('../patterns/corner-ribbon/Cover')),
    [Pattern.CurvedBackground]: dynamic(() => import('../patterns/curved-background/Cover')),
    [Pattern.CustomCheckboxButton]: dynamic(() => import('../patterns/custom-checkbox-button/Cover')),
    [Pattern.CustomRadioButton]: dynamic(() => import('../patterns/custom-radio-button/Cover')),
    // D
    [Pattern.DiagonalSection]: dynamic(() => import('../patterns/diagonal-section/Cover')),
    [Pattern.DockedAtCorner]: dynamic(() => import('../patterns/docked-at-corner/Cover')),
    [Pattern.DotLeader]: dynamic(() => import('../patterns/dot-leader/Cover')),
    [Pattern.DotNavigation]: dynamic(() => import('../patterns/dot-navigation/Cover')),
    [Pattern.Drawer]: dynamic(() => import('../patterns/drawer/Cover')),
    [Pattern.DropArea]: dynamic(() => import('../patterns/drop-area/Cover')),
    [Pattern.DropCap]: dynamic(() => import('../patterns/drop-cap/Cover')),
    [Pattern.Dropdown]: dynamic(() => import('../patterns/dropdown/Cover')),
    // F
    [Pattern.FadingLongSection]: dynamic(() => import('../patterns/fading-long-section/Cover')),
    [Pattern.FeatureComparison]: dynamic(() => import('../patterns/feature-comparison/Cover')),
    [Pattern.FeatureList]: dynamic(() => import('../patterns/feature-list/Cover')),
    [Pattern.FixedAtCorner]: dynamic(() => import('../patterns/fixed-at-corner/Cover')),
    [Pattern.FixedAtSide]: dynamic(() => import('../patterns/fixed-at-side/Cover')),
    [Pattern.FloatingLabel]: dynamic(() => import('../patterns/floating-label/Cover')),
    [Pattern.FolderStructure]: dynamic(() => import('../patterns/folder-structure/Cover')),
    [Pattern.FullBackground]: dynamic(() => import('../patterns/full-background/Cover')),
    [Pattern.FullScreenMenu]: dynamic(() => import('../patterns/full-screen-menu/Cover')),
    // H
    [Pattern.HolyGrail]: dynamic(() => import('../patterns/holy-grail/Cover')),
    // I
    [Pattern.InitialAvatar]: dynamic(() => import('../patterns/initial-avatar/Cover')),
    [Pattern.InputAddon]: dynamic(() => import('../patterns/input-addon/Cover')),
    [Pattern.InvertedCorners]: dynamic(() => import('../patterns/inverted-corners/Cover')),
    // K
    [Pattern.KeyboardShortcut]: dynamic(() => import('../patterns/keyboard-shortcut/Cover')),
    // L
    [Pattern.LayeredCard]: dynamic(() => import('../patterns/layered-card/Cover')),
    [Pattern.LinedPaper]: dynamic(() => import('../patterns/lined-paper/Cover')),
    // M
    [Pattern.MasonryGrid]: dynamic(() => import('../patterns/masonry-grid/Cover')),
    [Pattern.MediaObject]: dynamic(() => import('../patterns/media-object/Cover')),
    [Pattern.MegaMenu]: dynamic(() => import('../patterns/mega-menu/Cover')),
    [Pattern.Menu]: dynamic(() => import('../patterns/menu/Cover')),
    [Pattern.Modal]: dynamic(() => import('../patterns/modal/Cover')),
    // N
    [Pattern.NestedDropdowns]: dynamic(() => import('../patterns/nested-dropdowns/Cover')),
    [Pattern.Notification]: dynamic(() => import('../patterns/notification/Cover')),
    // O
    [Pattern.OverlayPlayButton]: dynamic(() => import('../patterns/overlay-play-button/Cover')),
    // P
    [Pattern.Pagination]: dynamic(() => import('../patterns/pagination/Cover')),
    [Pattern.PopoverArrow]: dynamic(() => import('../patterns/popover-arrow/Cover')),
    [Pattern.PresenceIndicator]: dynamic(() => import('../patterns/presence-indicator/Cover')),
    [Pattern.PreviousNextButtons]: dynamic(() => import('../patterns/previous-next-buttons/Cover')),
    [Pattern.PriceTag]: dynamic(() => import('../patterns/price-tag/Cover')),
    [Pattern.PricingTable]: dynamic(() => import('../patterns/pricing-table/Cover')),
    [Pattern.ProgressBar]: dynamic(() => import('../patterns/progress-bar/Cover')),
    [Pattern.PropertyList]: dynamic(() => import('../patterns/property-list/Cover')),
    // Q
    [Pattern.QuestionsAndAnswers]: dynamic(() => import('../patterns/questions-and-answers/Cover')),
    // R
    [Pattern.RadialProgressBar]: dynamic(() => import('../patterns/radial-progress-bar/Cover')),
    [Pattern.RadioButtonGroup]: dynamic(() => import('../patterns/radio-button-group/Cover')),
    [Pattern.RadioSwitch]: dynamic(() => import('../patterns/radio-switch/Cover')),
    [Pattern.Rating]: dynamic(() => import('../patterns/rating/Cover')),
    [Pattern.ResizableElement]: dynamic(() => import('../patterns/resizable-element/Cover')),
    [Pattern.Ribbon]: dynamic(() => import('../patterns/ribbon/Cover')),
    // S
    [Pattern.SameHeightColumns]: dynamic(() => import('../patterns/same-height-columns/Cover')),
    [Pattern.SearchBox]: dynamic(() => import('../patterns/search-box/Cover')),
    [Pattern.Separator]: dynamic(() => import('../patterns/separator/Cover')),
    [Pattern.Sidebar]: dynamic(() => import('../patterns/sidebar/Cover')),
    [Pattern.SimpleGrid]: dynamic(() => import('../patterns/simple-grid/Cover')),
    [Pattern.Slider]: dynamic(() => import('../patterns/slider/Cover')),
    [Pattern.SpinButton]: dynamic(() => import('../patterns/spin-button/Cover')),
    [Pattern.SplitNavigation]: dynamic(() => import('../patterns/split-navigation/Cover')),
    [Pattern.SplitScreen]: dynamic(() => import('../patterns/split-screen/Cover')),
    [Pattern.StackedCards]: dynamic(() => import('../patterns/stacked-cards/Cover')),
    [Pattern.StampBorder]: dynamic(() => import('../patterns/stamp-border/Cover')),
    [Pattern.Statistic]: dynamic(() => import('../patterns/statistic/Cover')),
    [Pattern.StatusLight]: dynamic(() => import('../patterns/status-light/Cover')),
    [Pattern.StepperInput]: dynamic(() => import('../patterns/stepper-input/Cover')),
    [Pattern.StickyFooter]: dynamic(() => import('../patterns/sticky-footer/Cover')),
    [Pattern.StickyHeader]: dynamic(() => import('../patterns/sticky-header/Cover')),
    [Pattern.StickySections]: dynamic(() => import('../patterns/sticky-sections/Cover')),
    [Pattern.StickyTableColumn]: dynamic(() => import('../patterns/sticky-table-column/Cover')),
    [Pattern.StickyTableHeaders]: dynamic(() => import('../patterns/sticky-table-headers/Cover')),
    [Pattern.Switch]: dynamic(() => import('../patterns/switch/Cover')),
    // T
    [Pattern.Tab]: dynamic(() => import('../patterns/tab/Cover')),
    [Pattern.Teardrop]: dynamic(() => import('../patterns/teardrop/Cover')),
    [Pattern.ThreeDimensionsCard]: dynamic(() => import('../patterns/three-dimensions-card/Cover')),
    [Pattern.Timeline]: dynamic(() => import('../patterns/timeline/Cover')),
    [Pattern.TogglePasswordVisibility]: dynamic(() => import('../patterns/toggle-password-visibility/Cover')),
    [Pattern.Tooltip]: dynamic(() => import('../patterns/tooltip/Cover')),
    [Pattern.TreeDiagram]: dynamic(() => import('../patterns/tree-diagram/Cover')),
    [Pattern.TriangleButtons]: dynamic(() => import('../patterns/triangle-buttons/Cover')),
    // U
    [Pattern.UploadButton]: dynamic(() => import('../patterns/upload-button/Cover')),
    // V
    [Pattern.ValidationIcon]: dynamic(() => import('../patterns/validation-icon/Cover')),
    [Pattern.VideoBackground]: dynamic(() => import('../patterns/video-background/Cover')),
    [Pattern.Voting]: dynamic(() => import('../patterns/voting/Cover')),
    // W
    [Pattern.Watermark]: dynamic(() => import('../patterns/watermark/Cover')),
    [Pattern.Wizard]: dynamic(() => import('../patterns/wizard/Cover')),
    // Z
    [Pattern.ZigzagTimeline]: dynamic(() => import('../patterns/zigzag-timeline/Cover')),
};

export const CoverCard: React.FC<CoverCardProps> = ({ pattern }) => {
    const Cover = CoverList[pattern];

    return (
        <Link href={`/${slug(pattern)}`}>
            <a className="block-cover">
                <Cover />
                <h4 className="block-cover__name">
                    {pattern}
                </h4>
            </a>
        </Link>
    );
};
