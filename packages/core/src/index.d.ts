import * as Stencil from '@stencil/core';

import { Animation, AnimationBuilder, AnimationController, AnimationOptions } from './components/animation-controller/animation-interface';
import { ActionSheet, ActionSheetButton, ActionSheetEvent, ActionSheetOptions } from './components/action-sheet/action-sheet';
import { ActionSheetController } from './components/action-sheet-controller/action-sheet-controller';
import { Alert, AlertButton, AlertEvent, AlertInput, AlertOptions } from './components/alert/alert';
import { AlertController } from './components/alert-controller/alert-controller';
import { Backdrop } from './components/backdrop/backdrop'
import { Loading, LoadingEvent, LoadingOptions } from './components/loading/loading';
import { LoadingController } from './components/loading-controller/loading-controller';
import { GestureDetail, GestureCallback } from './components/gesture/gesture';
import { Menu } from './components/menu/menu';
import { MenuType } from './components/menu/menu-types';
import { MenuController } from './components/menu/menu-controller';
import { Modal, ModalOptions, ModalEvent } from './components/modal/modal';
import { ModalController } from './components/modal-controller/modal-controller';

import { Popover, PopoverEvent, PopoverOptions } from './components/popover/popover'
import { PopoverController } from './components/popover-controller/popover-controller'

import { Scroll, ScrollCallback, ScrollDetail } from './components/scroll/scroll';
import { Segment } from './components/segment/segment';
import { SegmentButton, SegmentButtonEvent } from './components/segment-button/segment-button';
import { Toast, ToastEvent, ToastOptions } from './components/toast/toast'
import { ToastController } from './components/toast-controller/toast-controller'

import { TransitionBuilder } from './navigation/nav-interfaces';

export interface Config {
  get: (key: string, fallback?: any) => any;
  getBoolean: (key: string, fallback?: boolean) => boolean;
  getNumber: (key: string, fallback?: number) => number;
}


export type CssClassMap = { [className: string]: boolean };


export interface BaseInputComponent {
  disabled: boolean;
  hasFocus: boolean;
  value: string;

  fireFocus: () => void;
  fireBlur: () => void;
}


export interface BooleanInputComponent extends BaseInputComponent {
  checked: boolean;
  toggle: (ev: UIEvent) => void;
}


export {
  ActionSheet,
  ActionSheetButton,
  ActionSheetEvent,
  ActionSheetOptions,
  ActionSheetController,
  Alert,
  AlertButton,
  AlertEvent,
  AlertInput,
  AlertOptions,
  AlertController,
  Animation,
  AnimationBuilder,
  AnimationController,
  AnimationOptions,
  Backdrop,
  GestureCallback,
  GestureDetail,
  Loading,
  LoadingOptions,
  LoadingController,
  LoadingEvent,
  Menu,
  MenuController,
  MenuType,
  Modal,
  ModalController,
  ModalOptions,
  ModalEvent,
  Popover,
  PopoverController,
  PopoverEvent,
  PopoverOptions,
  Scroll,
  ScrollCallback,
  ScrollDetail,
  Segment,
  SegmentButton,
  SegmentButtonEvent,
  TransitionBuilder,
  Toast,
  ToastEvent,
  ToastOptions,
  ToastController
}

export interface StencilElement extends HTMLElement {
  componentOnReady?: (cb: (elm?: StencilElement) => void) => void;
}