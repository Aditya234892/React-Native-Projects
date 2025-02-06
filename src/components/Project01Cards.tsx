import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FlatCards from "./Project01Components/FlatCards";
import ElevatedCards from "./Project01Components/ElevatedCards";
import FancyCard from "./Project01Components/FancyCard";
import ActionCard from "./Project01Components/ActionCard";
import ContactList from "./Project01Components/ContactList";
import MyntraCard from "./Project01Components/MyntraCard";

const Project01Cards = () => {

    return(
        <View>
            <ScrollView>
                <FlatCards/>
                <ElevatedCards />
                <FancyCard />
                <ContactList />
                <ActionCard/>
                <MyntraCard/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Project01Cards;