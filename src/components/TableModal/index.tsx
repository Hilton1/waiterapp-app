import { Modal, TouchableOpacity } from 'react-native';
import { Button } from '../Button/intex';
import { Close } from '../Icons/Close';

import { Text } from '../Text';

import { Overlay, ModalBody, Header, Form, Input } from './styles';

export function TableModal() {
  return (
    <Modal
      transparent
    >
      <Overlay>
        <ModalBody>
          <Header>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Número da mesa'
              placeholderTextColor='#666'
            />

            <Button onPress={() => alert('Salvou!')}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
