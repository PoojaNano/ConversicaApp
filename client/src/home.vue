<template>
      <div class="table-container">
        <table>
          <thead>
            <tr >
              <th>Name</th>
              <th>Skills</th>
              <th>Conversation</th>
              <th>Type</th>
              <th>Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" >
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
            {  name: 'ABC',   skills: 6 ,  conversation: '20', type:'sms', contacts: '415'},
            {  name: 'XYZ',   skills: 8 ,  conversation: '150', type:'sms', contacts: '321'},
            {  name: 'ABC',   skills: 5 ,  conversation: '240', type:'sms', contacts: '123' }
          ]
        };
      }
    };
    </script>
    <style scoped>
    .table-container {
      margin: 100px;
    }
    
    table {
      width: 300%;
      
    }
    
    th, td {
      
      padding: 5px;
      text-align: left;
    }
    
    th {
      background-color: #403f3f00;
    }
    </style>
    
    