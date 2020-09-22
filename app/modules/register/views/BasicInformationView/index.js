import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@core/components/Button';
import styles from '@register/views/BasicInformationView/styles';
import NavigationService from '@core/utils/navigation';
import CustomTextInput from '@register/components/CustomTextInput';
import IconIon from 'react-native-vector-icons/Ionicons';
import variables from '@styles/variables';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateUtils from '@core/utils/date';
import { LABELS } from '@register/views/BasicInformationView/constants';
import { setBasicInformation } from '@register/store/actions';

const BasicInformationView = ({ registration, setInformation }) => {
  const [showPicker, showPickerChange] = useState(false);
  const { basicInformation } = registration;
  const validateValues = values => {
    let errors = {};
    const { name, lastname, dateOfBirth, phone } = values;
    if (!name || name === '') {
      errors.name = 'Este campo es obligatorio';
    }
    if (!lastname || lastname === '') {
      errors.lastname = 'Este campo es obligatorio';
    }
    if (!dateOfBirth || dateOfBirth === '') {
      errors.dateOfBirth = 'Este campo es obligatorio';
    }
    if (!phone || phone === '') {
      errors.phone = 'Este campo es obligatorio';
    }
    return errors;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => NavigationService.goBack()}
          activeOpacity={0.8}
        >
          <IconIon
            name="md-arrow-back"
            size={25}
            color={variables.colors.backgroundOrange}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{LABELS.title}</Text>
      <Formik
        initialValues={basicInformation}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => validateValues(values)}
        onSubmit={values => {
          const errors = validateValues(values);
          if (Object.keys(errors).length === 0) {
            setInformation(values);
            NavigationService.navigate('UbicationView');
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          values,
          errors
        }) => (
          <View style={styles.inputsContainer}>
            <CustomTextInput
              title="Nombre"
              icon="name"
              value={values.name}
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Ingrese su nombre"
            />
            <CustomTextInput
              title="Apellido"
              icon="lastname"
              error={errors.lastname}
              value={values.lastname}
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              placeholder="Ingrese su apellido"
            />
            {showPicker && (
              <DateTimePicker
                value={DateUtils.transformToDate(values.dateOfBirth)}
                onChange={(event, date) => {
                  showPickerChange(false);
                  if (date) {
                    setFieldValue(
                      'dateOfBirth',
                      DateUtils.formatBirthDate(date)
                    );
                  }
                }}
                minimumDate={new Date(1920, 0, 1)}
                maximumDate={new Date()}
              />
            )}
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => showPickerChange(true)}
            >
              <CustomTextInput
                title="Fecha de Nacimiento"
                error={errors.dateOfBirth}
                value={values.dateOfBirth}
                icon="dateOfBirth"
                editable={false}
                onBlur={handleBlur('dateOfBirth')}
                placeholder="Ingrese su fecha de nacimiento"
              />
            </TouchableOpacity>
            <CustomTextInput
              title="Telefono"
              error={errors.phone}
              icon="phoneNumber"
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              placeholder="Ingrese su teléfono"
            />
            <View style={styles.buttonContainer}>
              <Button
                type="primary"
                rightArrow
                text="Continuar"
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const mapDispatchToProps = {
  setInformation: setBasicInformation
};

const mapStateToProps = state => ({
  registration: state.registration
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInformationView);
