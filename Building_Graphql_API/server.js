const express = require ('express');
const { ApolloServer } = require ('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');

// set env variables

dotEnv.config();