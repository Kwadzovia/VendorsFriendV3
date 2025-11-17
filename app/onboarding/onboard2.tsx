import { router } from 'expo-router';
import { Button, Image, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingDots from '../../components/onboarddots';

export default function Onboard2() {
  return (
        <SafeAreaView style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
            <Image source={(require('../../assets/images/spotify-logo.png'))} style={{ width: 100, height: 100 }}/>
            <Image source={(require('../../assets/images/standing-12.png'))} style={{ width: 300, height: 300 }} />
            <Text>Made for Makers</Text>
            <Text>An app for makers, creators, and vendors alike</Text>
            <OnboardingDots total={3} current={1} />
            <Pressable
            onPress={() => router.push("./onboard3")}
            style={{ padding: 20, backgroundColor: 'purple', borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>Next</Text>
            </Pressable>
            <Button title="Skip" onPress={() => {}} />
        </SafeAreaView>
  );
}