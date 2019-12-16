import React from 'react';
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
            <div style={{ margin: '32px 0' }}>
                <Link
                    to="/"
                    style={{
                        backgroundColor: '#00449E',
                        borderRadius: '4px',
                        color: '#FFF',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}
                >
                    .home
                </Link>
            </div>
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    borderBottomColor: 'transparent',
                    marginTop: '32px',
                    position: 'relative',
                }}
            >
                <h1
                    style={{
                        backgroundColor: '#FFF',
                        fontSize: '36px',
                        fontWeight: 600,
                        left: '50%',
                        lineHeight: 1.5,
                        margin: 0,
                        padding: '0 16px',
                        position: 'absolute',
                        top: 0,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    Explore
                </h1>

                <h2
                    style={{
                        fontSize: '24px',
                        fontWeight: 300,
                        lineHeight: 1.5,
                        margin: '32px 0 16px 0',
                        padding: '0',
                        textAlign: 'center',
                    }}
                >
                    Here is the collection of {numPatterns} patterns
                </h2>
                <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                    All covers you see in this page are made with CSS only. Inspect them! 🎉
                </div>

                <div style={{ margin: '24px 0', textAlign: 'center' }}>
                    <ProductHuntBadge />
                </div>

                <section>
                    <Heading title="Layout" />

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '32px' }}>
                        <CoverCard pattern={Pattern.HolyGrail} />
                        <CoverCard pattern={Pattern.SameHeightColumns} />
                        <CoverCard pattern={Pattern.Sidebar} />
                        <CoverCard pattern={Pattern.SimpleGrid} />
                        <CoverCard pattern={Pattern.SplitScreen} />
                        <CoverCard pattern={Pattern.StickyFooter} />
                        <CoverCard pattern={Pattern.StickyHeader} />
                    </div>
                </section>

                <section>
                    <Heading title="Navigation" />

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '32px' }}>
                        <CoverCard pattern={Pattern.Breadcrumb} />
                        <CoverCard pattern={Pattern.CircularNavigation} />
                        <CoverCard pattern={Pattern.DotNavigation} />
                        <CoverCard pattern={Pattern.Drawer} />
                        <CoverCard pattern={Pattern.Dropdown} />
                        <CoverCard pattern={Pattern.FullScreenMenu} />
                        <CoverCard pattern={Pattern.Menu} />
                        <CoverCard pattern={Pattern.Pagination} />
                        <CoverCard pattern={Pattern.PreviousNextButtons} />
                        <CoverCard pattern={Pattern.SplitNavigation} />
                        <CoverCard pattern={Pattern.Tab} />
                        <CoverCard pattern={Pattern.Wizard} />
                    </div>
                </section>

                <section>
                    <Heading title="Input" />

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '32px' }}>
                        <CoverCard pattern={Pattern.ButtonWithIcon} />
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

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '32px' }}>
                        <CoverCard pattern={Pattern.Accordion} />
                        <CoverCard pattern={Pattern.Avatar} />
                        <CoverCard pattern={Pattern.AvatarList} />
                        <CoverCard pattern={Pattern.Badge} />
                        <CoverCard pattern={Pattern.Card} />
                        <CoverCard pattern={Pattern.Centering} />
                        <CoverCard pattern={Pattern.CloseButton} />
                        <CoverCard pattern={Pattern.CookieBanner} />
                        <CoverCard pattern={Pattern.CornerRibbon} />
                        <CoverCard pattern={Pattern.DockedAtCorner} />
                        <CoverCard pattern={Pattern.DotLeader} />
                        <CoverCard pattern={Pattern.DropArea} />
                        <CoverCard pattern={Pattern.DropCap} />
                        <CoverCard pattern={Pattern.FeatureComparison} />
                        <CoverCard pattern={Pattern.FeatureList} />
                        <CoverCard pattern={Pattern.FixedAtCorner} />
                        <CoverCard pattern={Pattern.KeyboardShortcut} />
                        <CoverCard pattern={Pattern.InitialAvatar} />
                        <CoverCard pattern={Pattern.MediaObject} />
                        <CoverCard pattern={Pattern.OverlayPlayButton} />
                        <CoverCard pattern={Pattern.PricingTable} />
                        <CoverCard pattern={Pattern.PropertyList} />
                        <CoverCard pattern={Pattern.QuestionsAndAnswers} />
                        <CoverCard pattern={Pattern.Ribbon} />
                        <CoverCard pattern={Pattern.Separator} />
                        <CoverCard pattern={Pattern.Timeline} />
                    </div>
                </section>

                <section>
                    <Heading title="Feedback" />

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '32px' }}>
                        <CoverCard pattern={Pattern.Modal} />
                        <CoverCard pattern={Pattern.Notification} />
                        <CoverCard pattern={Pattern.PopoverArrow} />
                        <CoverCard pattern={Pattern.ProgressBar} />
                        <CoverCard pattern={Pattern.RadialProgressBar} />
                        <CoverCard pattern={Pattern.ResizableElement} />
                        <CoverCard pattern={Pattern.PresenceIndicator} />
                        <CoverCard pattern={Pattern.ValidationIcon} />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ExplorePage;
