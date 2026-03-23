import React, { useState } from 'react';
import { Modal, Portal, TextInput, Button } from 'react-native-paper';

export default function Agregar({ visible, onDismiss, onAdd }) {
  const [nombre, setNombre] = useState('');
  const [matricula, setMatricula] = useState('');

  const handleAdd = () => {
    if (nombre && matricula) {
      onAdd({ nombre, apellido: '', matricula });
      setNombre('');
      setMatricula('');
      onDismiss();
    }
  };

  const handleCancel = () => {
    setNombre('');
    setMatricula('');
    onDismiss();
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={handleCancel} contentContainerStyle={{ backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 }}>
        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          mode="outlined"
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Matrícula"
          value={matricula}
          onChangeText={setMatricula}
          mode="outlined"
          style={{ marginBottom: 20 }}
        />
        <Button mode="contained" onPress={handleAdd} style={{ marginBottom: 10 }}>
          Agregar
        </Button>
        <Button mode="outlined" onPress={handleCancel}>
          Cancelar
        </Button>
      </Modal>
    </Portal>
  );
}