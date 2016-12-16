import React, {Component} from 'react';
import {
    View,
    Image,
    ViewPagerAndroid,
    Text
} from 'react-native';

//components
import LikeCount from './LikeCount';
import Button from './Button';
import ProgressBar from './ProgressBar';

//const
import {PAGES, BGCOLOR, IMAGE_URIS} from './Utility';

//styles
import styles from './Styles';

class App extends Component {

    //descriptions...
    static title = '<ViewPagerAndroid>';
    static description = 'Container that allows to flip left and right between child views.';

    //default state
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            animationsAreEnabled: true,
            scrollEnabled: true,
            progress: {
                position: 0,
                offset: 0
            }
        }
    }

    //As ViewPagerAndroid Scrolled -> trigger pageSelected -> setState:page
    onPageSelected = (e) => {
        console.log('onPageSelected', e.nativeEvent);

        this.setState({
            page: e.nativeEvent.position
        });
    }

    //As ViewPagerAndroid Scrolling -> trigger pagerScroll -> setState:progress
    onPageScroll = (e) => {
        console.log('onPageScroll', e.nativeEvent);

        this.setState({
            progress: e.nativeEvent
        });
    }

    //As ViewPagerAndroid Scrolling -> [idle,dragging,settling] -> setState:scrollState
    onPageScrollStateChanged = (state) => {
        this.setState({
            scrollState: state
        })
    }

    //As ViewPagerAndroid -> ref by viewPage -> setPage(index)
    move = (delta) => {
        let page = this.state.page + delta;
        this.go(page);
    }

    go = (page) => {

        if (this.state.animationsAreEnabled) {
            //viewPage -> ViewPageAndroid components (see * )
            this.viewPage.setPage(page);
        } else {
            this.viewPage.setPageWithoutAnimation(page);
        }

        this.setState({
            page
        });
    }

    //render View process...

    render() {

        //Create pages (Image && LikeCount) for ViewPagerAndroid pages use...
        let pages = [];

        for (let i = 0; i < PAGES; i++) {

            let pageStyle = {
                backgroundColor: BGCOLOR[i % BGCOLOR.length],
                alignItems: 'center',
                padding: 20,
            };

            pages.push(
                <View key={i} style={pageStyle} collapsable={false}>
                    <Image style={styles.image}
                           source={{uri:IMAGE_URIS[i % BGCOLOR.length]}}/>
                    <LikeCount/>
                </View>
            )
        }

        //get state [page,animationsAreEnabled]
        const {page, animationsAreEnabled} = this.state;

        //Main Layout...

        //View- (column)
        //  -ViewPagerAndroid (ref by viewPager)
        //  -View (row)
        //      -Button (state by scrollEnabled)
        //  -View (row)
        //      -Button (state by animationsAreEnabled)
        //      -Button (state by scrollState)
        //  -View (row)
        //      -Button (text:start,go(0))
        //      -Button (text:prev,go(-1))
        //      -ProgressBar (state by progress)
        //      -Button (text:next,go(1))
        //      -Button (text:last,go(PAGES-1))

        return (
            <View style={styles.container}>
                <ViewPagerAndroid style={styles.viewPage}
                                  initialPage={0}
                                  scrollEnabled={this.state.scrollEnabled}
                                  onPageScroll={this.onPageScroll}
                                  onPageSelected={this.onPageSelected}
                                  onPageScrollStateChanged={this.onPageScrollStateChanged}
                                  pageMargin={10}
                                  ref={viewPager => {this.viewPage = viewPager;}}>
                    {pages}
                </ViewPagerAndroid>
                <View style={styles.buttons}>
                    <Button
                        enabled={true}
                        text={this.state.scrollEnabled ? 'Scroll Enabled':'Scroll Disabled'}
                        onPress={()=>this.setState({scrollEnabled: !this.state.scrollEnabled})}/>
                </View>
                <View style={styles.buttons}>
                    {animationsAreEnabled ?
                        <Button text='Turn off animations'
                                enabled={true}
                                onPress={()=>this.setState({animationsAreEnabled:false})}/>
                        :
                        <Button text='Turn animations back on'
                                enabled={true}
                                onPress={()=>this.setState({animationsAreEnabled:true})}/>
                    }
                    <Text style={styles.scrollStateText}>
                        ScrollState[ {this.state.scrollState} ]
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <Button text='start' enabled={page>0} onPress={()=>this.go(0)}/>
                    <Button text='prev' enabled={page>0} onPress={()=>this.move(-1)}/>
                    <ProgressBar progress={this.state.progress} size={100}/>
                    <Button text='next' enabled={page < PAGES-1} onPress={()=>this.move(1)}/>
                    <Button text='last' enabled={page <PAGES-1} onPress={()=>this.go(PAGES-1)}/>
                </View>
            </View>
        );
    }
}

export default App;
