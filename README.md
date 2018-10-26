# react-native-browser
A cross-platform (iOS / Android), full-featured, highly customizable web browser module for React Native apps.
# Install
npm i react-native-webbrowser --save
# Usage
Here is an extensive overview of the component usage.



            
     class SampleApp extends Component {
    render() {
        return (
            <View style={{paddingTop:20, flex:1}}> 
            <Webbrowser
                    url="https://your-url.com"
                    hideHomeButton={false}
                    hideToolbar={false}
                    hideAddressBar={false}
                    hideStatusBar={false}
                    foregroundColor={'#efefef'}
                    backgroundColor={'#333'}
                />
                
            </View>
        );
    }
    }

# Props
1.url - string required, web address

2.hideAddressBar - bool optional, hides the address bar / address input

3.hideStatusBar - bool optional, hides the status bar / site title

4.hideToolbar - bool optional, hides the toolbar (nav bar)

5.hideHomeButton - bool optional, hides just the home button from the toolbar

6.hideActivityIndicator - booloptional, hides the activity indicator (loading) overlay

7.foregroundColor - string optional, sets the forground color of text and icon elements

8.backgroundColor - string optional, sets the background color

9.onNavigationStateChange - function(navState) optional, url change callback

10.onShouldStartLoadWithRequest - function(event) optional, return false if the request should be stopped
