import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubcriptionDetails = () => {
    const {id} = useLocalSearchParams<{id : string}>();
  return (
    <View>
      <Text>Subcription Details: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  )
}

export default SubcriptionDetails