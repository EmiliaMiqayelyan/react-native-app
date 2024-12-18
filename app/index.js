import {View, Text, SafeAreaView, ScrollView} from "react-native";
import {COLORS, FONT, SIZES, images, icons} from "../constants";
import {Stack, useRouter} from "expo-router";
import React, {useState} from "react";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components"

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" sty/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                ),
                headerTitle: ""
            }}>
                Home
            </Stack.Screen>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome />
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;