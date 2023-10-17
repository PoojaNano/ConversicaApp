<template>
    <h3>Sample Table </h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skills</th>
              <th>Conversation</th>
              <th>Type</th>
              <th>Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.skills }}</td>
              <td>{{ user.conversation }}</td>
              <td>{{ user.type }}</td>
              <td>{{ user.contacts }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          users: [
            {  name: 'abc',   skills: 'abc' ,  conversation: '20', type:'sms', contacts: '3'},
            {  name: 'abc',   skills: 'abc' ,  conversation: '50', type:'sms', contacts: '3'},
            {  name: 'abc',   skills: 'abc' ,  conversation: '40', type:'sms', contacts: '3' }
          ]
        };
      }
    };
    </script>
    <style scoped>
    .table-container {
      margin: 20px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: left;
    }
    
    th {
      background-color: #f2f2f2;
    }
    </style>
    
    