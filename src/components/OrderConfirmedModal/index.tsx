import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk } : OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Container>
        <CheckCircle />
        <Text size={20} weight='600' color='#FFF' style={{ marginTop: 12 }}>
          Pedido Confirmado
        </Text>
        <Text opacity={0.9} color='#FFF' style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton>
          <Text weight='600' color='#D73035' onPress={onOk}>
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
