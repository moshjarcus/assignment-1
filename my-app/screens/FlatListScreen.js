import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
//import { FlatList } from 'react-native-gesture-handler';

const FlatListScreen = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json()
        ).then(resData=> setData(resData));

    }, [data]);


    return (
        <View>
            <FlatList 
            data={data}
            renderItem={({ item })=> (
                <Text style={{margin: 10, fontSize: 14, backgroundColor: "lightblue", padding: 10}}>{item.email}</Text>
            )}
            keyExtractor={(item, index) => item + index}
            />
        </View>
    );
};

export default FlatListScreen;

