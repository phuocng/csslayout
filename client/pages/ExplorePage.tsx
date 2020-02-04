/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import CoverCard from '../components/CoverCard';
import Heading from '../components/Heading';
import Pattern from '../constants/Pattern';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Layout from '../layouts/Layout';
import ProductHuntBadge from '../layouts/ProductHuntBadge';

const ExplorePage = () => {
    useDocumentTitle('CSS Layout ∙ Explore');
    const numPatterns = Object.keys(Pattern).length;

    return (
        <Layout>
            <Helmet>
                <meta name="description" content="CSS layouts and patterns" />
                <meta name="keywords" content="css display, css flexbox, css grid, css layouts, flex, flexbox, flexbox cheatsheet, web design, web template" />
            </Helmet>
            <div className='text-2xl p-4 xl:pl-0'>
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    Home
                </Link>
                <span className='mx-2'>/</span>
                <span>Explore</span>
            </div>
            <div>
                <div className='xl:border-l xl:border-t xl:border-r xl:border-gray-400 p-4'>
                    <h2
                        className='text-2xl mb-6'
                        style={{
                            fontWeight: 300,
                            lineHeight: 1.5,
                            padding: '0',
                            textAlign: 'center',
                        }}
                    >
                        Here is the collection of {numPatterns} patterns
                    </h2>
                    <div className='mb-5' style={{ textAlign: 'center' }}>
                        All covers you see in this page are made with CSS only. Inspect them! 🎉
                    </div>

                    <div className='flex justify-center pb-5'>
                        <ProductHuntBadge />
                    </div>
                </div>

                <section>
                    <Heading title="Layout" />

                    <div className='xl:border-l xl:border-r xl:border-gray-400' style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
                        <CoverCard pattern={Pattern.CardLayout} />
                        <CoverCard pattern={Pattern.HolyGrail} />
                        <CoverCard pattern={Pattern.SameHeightColumns} />
                        <CoverCard pattern={Pattern.Sidebar} />
                        <CoverCard pattern={Pattern.SimpleGrid} />
                        <CoverCard pattern={Pattern.SplitScreen} />
                        <CoverCard pattern={Pattern.StickyFooter} />
                        <CoverCard pattern={Pattern.StickyHeader} />
                        <CoverCard pattern={Pattern.StickySections} />
                    </div>
                </section>

                <section>
                    <Heading title="Navigation" />

                    <div className='xl:border-l xl:border-r xl:border-gray-400' style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
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
                </section>

                <section>
                    <Heading title="Input" />

                    <div className='xl:border-l xl:border-r xl:border-gray-400' style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
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
                </section>

                <section>
                    <Heading title="Display" />

                    <div className='xl:border-l xl:border-r xl:border-gray-400' style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
                        <CoverCard pattern={Pattern.Accordion} />
                        <CoverCard pattern={Pattern.ArrowButtons} />
                        <CoverCard pattern={Pattern.Avatar} />
                        <CoverCard pattern={Pattern.AvatarList} />
                        <CoverCard pattern={Pattern.Badge} />
                        <CoverCard pattern={Pattern.Card} />
                        <CoverCard pattern={Pattern.Centering} />
                        <CoverCard pattern={Pattern.CloseButton} />
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
                        <CoverCard pattern={Pattern.FullBackground} />
                        <CoverCard pattern={Pattern.InitialAvatar} />
                        <CoverCard pattern={Pattern.KeyboardShortcut} />
                        <CoverCard pattern={Pattern.LinedPaper} />
                        <CoverCard pattern={Pattern.MediaObject} />
                        <CoverCard pattern={Pattern.OverlayPlayButton} />
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
                        <CoverCard pattern={Pattern.Timeline} />
                        <CoverCard pattern={Pattern.TriangleButtons} />
                        <CoverCard pattern={Pattern.VideoBackground} />
                        <CoverCard pattern={Pattern.Watermark} />
                    </div>
                </section>

                <section>
                    <Heading title="Feedback" />

                    <div className='xl:border-l xl:border-r xl:border-gray-400' style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
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
                </section>
            </div>
        </Layout>
    );
};

export default ExplorePage;
