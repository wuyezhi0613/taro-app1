

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
export default class NavBar extends Component {
    state = {
        paddingTop: 0
    }
    componentDidMount() {
        Taro.getSystemInfo().then(res => {
            console.log(res)
            this.setState({
                paddingTop: res.statusBarHeight,
                height: 100
            })
            
        })
    }
    render() {
        const style = {
            paddingTop: this.state.paddingTop
        }
        // 将状态栏的区域空余出来
        return (
            <View className='navbarWrap' style={style}>
            </View>
        );
    }
}

// 这里导航栏内容可以自行配置