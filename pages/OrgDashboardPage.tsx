import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, FlatList } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Widget from '../components/Widget'
import QuarantineWidget from '../components/QuarantinesWidget'
import { useOrgDashboardQuery } from '../generated/graphql'
import { useAuthUser } from '../hooks/useAuthUser'

const OrgDashboardPage = () => {
  const { user } = useAuthUser()
  console.log(user)
  const { data, loading } = useOrgDashboardQuery({
    variables: {
      organizationId: user?.organizationId!
    },
    skip: !user
  })
  console.log(data?.organization)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The Ohio State University</Text>
      </View>
      <QuarantineWidget />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingHorizontal: 10
  },
  header: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center'
  }
})

export default OrgDashboardPage
