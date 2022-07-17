import React, {useState, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ParentComponent from "./Network";
import NetworkModal from "./NetworkModal";
import axios from "axios";
import { NetworkContext } from "./NetworkContext";


const HomePage = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const {isConnected} = useContext(NetworkContext)

    const getDummyTodos = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        setTitle(res?.data?.title)
    }

    const handleFetch = () => {
        if(isConnected){
            setVisible(true)
            return
        }

        getDummyTodos()
    }


    return (
        <ParentComponent>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>The Home Page</Text>
                <TouchableOpacity
                    onPress={handleFetch}
                    style={{
                        width: '90%',
                        height: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'teal' //375027 
                    }}
                >
                    <Text style={{
                        color: 'white'
                    }}>
                        Get Dummy Todos
                    </Text>
                </TouchableOpacity>
                <Text>
                    Dummy to do: {title}
                </Text>
            </View>
            <NetworkModal
                visible={visible}
                setVisible={setVisible}
            />
        </ParentComponent>
    )
}

export default HomePage