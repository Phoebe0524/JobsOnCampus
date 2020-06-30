import React from "react";
import SettingLine from "../components/SettingLine";
import PublisherDetail from "../components/PublisherDetail";
import { SafeAreaView } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet, Image, Text } from "react-native";

const settingItems = [
  {
    title: "My account",
    name: "account-star",
    color: "dodgerblue",
  },
  {
    title: "My job preference",
    name: "account-heart",
    color: "dodgerblue",
  },

  {
    title: "My application",
    name: "folder-account-outline",
    color: "dodgerblue",
  },
  {
    title: "Settings",
    name: "settings",
    color: "dodgerblue",
  },
];
function AccountScreen(props) {
  return (
    <SafeAreaView>
      <PublisherDetail
        line1="Phoebe Xu"
        line2="xiaomengxu@brandeis.edu"
        image={require("../assets/user1.png")}
      />
      <View style={styles.container}>
        <FlatList
          data={settingItems}
          //keyExtractor={(settingItem) => settingItem.id.toString()}
          renderItem={({ item }) => (
            <SettingLine
              title={item.title}
              name={item.name}
              color={item.color}
            />
          )}
        />
      </View>
      <View style={styles.logout}>
        <SettingLine title="Log out" name="logout" color="dodgerblue" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginVertical: 5,
    //backgroundColor: "grey",
  },
  logout: {
    paddingTop: 20,
  },
});

export default AccountScreen;
