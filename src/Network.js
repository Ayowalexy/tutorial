import React, { useState, useContext, useEffect, useRef } from "react";
import { Text, View, Animated} from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import NoInternet from "./NoInternet";
import { NetworkContext  } from "./NetworkContext";


const ParentComponent = ({ children }) => {
    const [isOffline, setOfflineStatus] = useState(false);
    const { isConnected, setIsConnected } = useContext(NetworkContext)
    const netinfo = useNetInfo()

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
            setIsConnected(offline)
        });
        return () => removeNetInfoSubscription();
    }, []);

    return (
        <View style={{
            flex: 1
        }}>
             {isOffline && <NoInternet />}
            {children}
        </View>
    )
}

export const Example = () => {
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(currentState => {
            console.log(`Device is ${currentState.isConnected ? 'Connected': 'not connected'}`);
          });
                   
          return () => unsubscribe();
    }, [])
    return (
        <Text>
            Working With NetInfo
        </Text>
    )
}

export default ParentComponent



