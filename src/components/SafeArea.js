import { Platform, SafeAreaView, StatusBar } from "react-native"
import styled from "styled-components/native"

export const SafeArea = styled(SafeAreaView)`
  ${ Platform.OS === "android" && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: white;
  flex: 1;
`