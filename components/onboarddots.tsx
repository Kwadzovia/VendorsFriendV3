import { StyleSheet, View } from 'react-native';


export default function OnboardingDots({ total, current})
{
    return (
        <View style={styles.container}>
            {Array.from({length: total}).map((_, index) => {

                const isActive = index === current;
                return (
                    <View key={index} style={[
                        styles.dot,
                        isActive && styles.activeDot]}
                        />
                )
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: '#D1D5DB',
    },
    activeDot: {
        width: 16,
        backgroundColor: '#6B7280',
    }

})