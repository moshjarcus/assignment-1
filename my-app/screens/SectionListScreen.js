import React from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'
const data=[

    {
        title: "Main Dish",
        data: ["Pizza","BurgeR","Rosito","Rosito","Rosito","Rosito","Rosito","Rosito"],
    },
    {
        title: "Side",
        data: ["Fries","OnionRing","Shrump","Shrump","Shrump","Shrump","Shrump"],
    },
    {
        title: "Drink",
        data: ["water","pop","beer","beer","beer","beer","beer"],
    },
    {
        title: "dessert",
        data: ["cakr","cookie","ice cream"],
    },
];

const Item = ({title})=>{
    return(
      <View style={{marginVertical: 20, marginHorizontal: 10, fontSize: 14}}>
          <Text>
            {title}
          </Text>
      </View>  
    )
}

const SectionListScreen = () => {



    return (
        <View style={{flex: 1, marginTop: 50}}>
            <SectionList
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item title={item}/>}
            renderSectionHeader={({section})=> (
            <Text style={styles.header}>{section.title}</Text>)}
            />
        </View>
    )
}

export default SectionListScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        marginTop: 20,
        fontSize: 25,
        color: "white",
        padding: 20,
    }
})
