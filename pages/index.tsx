import * as React from 'react';
import { Heading, Spacer } from '@1milligram/design';

import { CoverCard } from '../components/CoverCard';
import { Pattern } from '../constants/Pattern';
import { Layout } from '../layouts/Layout';

const HomePage = () => {
    return (
        <Layout title="A collection of popular layouts and patterns made with CSS">
            <div className="block-container">
                <div className="page-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>CSS Layout</Heading>
                    <Heading level={4}>Popular layouts and patterns made with CSS</Heading>
                    <Spacer size="large" />
                    <div>Following covers are made with CSS only. Inspect them!</div>
                </div>

                <div className="page-home__category"><Heading level={2}>Display</Heading></div>
                <div className="page-home__collection">
                    <CoverCard pattern={Pattern.Accordion} />
                    <CoverCard pattern={Pattern.ArrowButtons} />
                    <CoverCard pattern={Pattern.Avatar} />
                    <CoverCard pattern={Pattern.AvatarList} />
                    <CoverCard pattern={Pattern.Badge} />
                    <CoverCard pattern={Pattern.Card} />
                    <CoverCard pattern={Pattern.Centering} />
                    <CoverCard pattern={Pattern.CloseButton} />
                    <CoverCard pattern={Pattern.ColorSwatch} />
                    <CoverCard pattern={Pattern.ConcaveCorners} />
                    <CoverCard pattern={Pattern.CookieBanner} />
                    <CoverCard pattern={Pattern.CornerRibbon} />
                    <CoverCard pattern={Pattern.CurvedBackground} />
                    <CoverCard pattern={Pattern.DiagonalSection} />
                    <CoverCard pattern={Pattern.DockedAtCorner} />
                    <CoverCard pattern={Pattern.DotLeader} />
                    <CoverCard pattern={Pattern.DropArea} />
                    <CoverCard pattern={Pattern.DropCap} />
                    <CoverCard pattern={Pattern.FadingLongSection} />
                    <CoverCard pattern={Pattern.FeatureComparison} />
                    <CoverCard pattern={Pattern.FeatureList} />
                    <CoverCard pattern={Pattern.FixedAtCorner} />
                    <CoverCard pattern={Pattern.FixedAtSide} />
                    <CoverCard pattern={Pattern.FolderStructure} />
                    <CoverCard pattern={Pattern.FullBackground} />
                    <CoverCard pattern={Pattern.InitialAvatar} />
                    <CoverCard pattern={Pattern.InvertedCorners} />
                    <CoverCard pattern={Pattern.KeyboardShortcut} />
                    <CoverCard pattern={Pattern.LayeredCard} />
                    <CoverCard pattern={Pattern.LinedPaper} />
                    <CoverCard pattern={Pattern.MediaObject} />
                    <CoverCard pattern={Pattern.OverlayPlayButton} />
                    <CoverCard pattern={Pattern.PriceTag} />
                    <CoverCard pattern={Pattern.PricingTable} />
                    <CoverCard pattern={Pattern.PropertyList} />
                    <CoverCard pattern={Pattern.QuestionsAndAnswers} />
                    <CoverCard pattern={Pattern.Ribbon} />
                    <CoverCard pattern={Pattern.Separator} />
                    <CoverCard pattern={Pattern.StackedCards} />
                    <CoverCard pattern={Pattern.StampBorder} />
                    <CoverCard pattern={Pattern.Statistic} />
                    <CoverCard pattern={Pattern.StatusLight} />
                    <CoverCard pattern={Pattern.StickyTableColumn} />
                    <CoverCard pattern={Pattern.StickyTableHeaders} />
                    <CoverCard pattern={Pattern.Teardrop} />
                    <CoverCard pattern={Pattern.ThreeDimensionsCard} />
                    <CoverCard pattern={Pattern.Timeline} />
                    <CoverCard pattern={Pattern.TreeDiagram} />
                    <CoverCard pattern={Pattern.TriangleButtons} />
                    <CoverCard pattern={Pattern.VideoBackground} />
                    <CoverCard pattern={Pattern.Voting} />
                    <CoverCard pattern={Pattern.Watermark} />
                    <CoverCard pattern={Pattern.ZigzagTimeline} />
                </div>

                <div className="page-home__category"><Heading level={2}>Feedback</Heading></div>
                <div className="page-home__collection">
                    <CoverCard pattern={Pattern.Modal} />
                    <CoverCard pattern={Pattern.Notification} />
                    <CoverCard pattern={Pattern.PopoverArrow} />
                    <CoverCard pattern={Pattern.ProgressBar} />
                    <CoverCard pattern={Pattern.RadialProgressBar} />
                    <CoverCard pattern={Pattern.ResizableElement} />
                    <CoverCard pattern={Pattern.PresenceIndicator} />
                    <CoverCard pattern={Pattern.Tooltip} />
                    <CoverCard pattern={Pattern.ValidationIcon} />
                </div>
                
                <div className="page-home__category"><Heading level={2}>Input</Heading></div>
                <div className="page-home__collection">
                    <CoverCard pattern={Pattern.ButtonWithIcon} />
                    <CoverCard pattern={Pattern.Chip} />
                    <CoverCard pattern={Pattern.CustomCheckboxButton} />
                    <CoverCard pattern={Pattern.CustomRadioButton} />
                    <CoverCard pattern={Pattern.FloatingLabel} />
                    <CoverCard pattern={Pattern.InputAddon} />
                    <CoverCard pattern={Pattern.RadioButtonGroup} />
                    <CoverCard pattern={Pattern.RadioSwitch} />
                    <CoverCard pattern={Pattern.Rating} />
                    <CoverCard pattern={Pattern.SearchBox} />
                    <CoverCard pattern={Pattern.Slider} />
                    <CoverCard pattern={Pattern.SpinButton} />
                    <CoverCard pattern={Pattern.StepperInput} />
                    <CoverCard pattern={Pattern.Switch} />
                    <CoverCard pattern={Pattern.TogglePasswordVisibility} />
                    <CoverCard pattern={Pattern.UploadButton} />
                </div>

                <div className="page-home__category"><Heading level={2}>Layout</Heading></div>
                <div className="page-home__collection">
                    <CoverCard pattern={Pattern.CardLayout} />
                    <CoverCard pattern={Pattern.HolyGrail} />
                    <CoverCard pattern={Pattern.MasonryGrid} />
                    <CoverCard pattern={Pattern.SameHeightColumns} />
                    <CoverCard pattern={Pattern.Sidebar} />
                    <CoverCard pattern={Pattern.SimpleGrid} />
                    <CoverCard pattern={Pattern.SplitScreen} />
                    <CoverCard pattern={Pattern.StickyFooter} />
                    <CoverCard pattern={Pattern.StickyHeader} />
                    <CoverCard pattern={Pattern.StickySections} />
                </div>

                <div className="page-home__category"><Heading level={2}>Navigation</Heading></div>
                <div className="page-home__collection">
                    <CoverCard pattern={Pattern.Breadcrumb} />
                    <CoverCard pattern={Pattern.CircularNavigation} />
                    <CoverCard pattern={Pattern.DotNavigation} />
                    <CoverCard pattern={Pattern.Drawer} />
                    <CoverCard pattern={Pattern.Dropdown} />
                    <CoverCard pattern={Pattern.FullScreenMenu} />
                    <CoverCard pattern={Pattern.MegaMenu} />
                    <CoverCard pattern={Pattern.Menu} />
                    <CoverCard pattern={Pattern.NestedDropdowns} />
                    <CoverCard pattern={Pattern.Pagination} />
                    <CoverCard pattern={Pattern.PreviousNextButtons} />
                    <CoverCard pattern={Pattern.SplitNavigation} />
                    <CoverCard pattern={Pattern.Tab} />
                    <CoverCard pattern={Pattern.Wizard} />
                </div>

                <Spacer size="large" />
            </div>
        </Layout>
    );
};

export default HomePage;
