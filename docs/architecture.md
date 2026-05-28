# Architecture

## Overview

This Telegram bot uses a workflow-based architecture with state machine for managing user conversations.

## Components

- **Bot Layer**: Telegram bot handlers, commands, keyboards
- **Workflow Engine**: State machine and flow routing
- **Repository Layer**: Data access abstraction
- **Service Layer**: Business logic
- **API Layer**: REST endpoints for admin management
- **DB Layer**: PostgreSQL database

## Data Flow


1. User sends message to bot
2. Session middleware loads user session
3. Text/Callback handler processes input
4. Workflow registry routes to appropriate flow
5. Flow handler processes state-specific logic
6. Session is saved to database
7. Response sent to user
