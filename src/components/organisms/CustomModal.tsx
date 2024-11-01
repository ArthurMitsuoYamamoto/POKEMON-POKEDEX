import React from 'react';
import { Dimensions, Modal, View, useColorScheme } from 'react-native';
import Backdrop from '../atoms/Backdrop';
import { CustomModalStyles } from '../../interfaces/organisms.interface';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import IconButton from '../molecules/IconButton';
import CloseIcon from '../../assets/icons/close.svg';

function CustomModal({
  children,
  modalVisible,
  handleModal,
}: {
  children: React.ReactNode;
  modalVisible: boolean;
  handleModal: () => void;
}) {
  const isDarkMode = useColorScheme() === 'dark';
  const { width, height } = Dimensions.get('window');

  const styles: CustomModalStyles = {
    modal: {
      width: width - 24,
      height: height / 2.5,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      padding: 12,
      borderRadius: 4,
      elevation: 2,
      gap: 12,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButton: {
      padding: 0,
      borderRadius: 0,
      alignSelf: 'flex-end',
    },
    childrenContainer: {
      flex: 1,
    },
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Backdrop />
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <IconButton
            onPress={handleModal}
            Image={CloseIcon}
            backgroundColor="transparent"
            style={styles.iconButton}
            size={24}
            color={isDarkMode ? '#fff' : '#000'}
          />
          <View style={styles.childrenContainer}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;
