import React from 'react'
import { Modal, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

export default function BottomModal({ onDismiss, visible, children, stick = false, style = {} }) {
    return (
        <Modal
            animated
            animationType="fade"
            visible={visible}
            overlay={false}
            transparent
            onRequestClose={onDismiss}>
            <View style={styles.overlay}>
                <TouchableWithoutFeedback onPress={onDismiss}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>

                <View
                    style={[styles.container, style]}>
                    <View style={styles.sliderIndicatorRow}>
                        {stick && <View style={styles.sliderIndicator} />}
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    container: {
        minHeight: 200,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        backgroundColor: 'white',
    },
    sliderIndicatorRow: {
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingVertical: 15,
    },
    sliderIndicator: {
        backgroundColor: '#CECECE',
        height: 5,
        width: 45,
        borderRadius: 3,
        alignSelf: 'center',
        marginBottom: 6,
    },
})
