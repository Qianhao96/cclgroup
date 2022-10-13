import React, { useContext, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { MegaMenu } from 'primereact/megamenu';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CSSTransition } from 'react-transition-group';
import { RTLContext } from './App';

const AppTopbar = (props: any) => {
    const isRTL = useContext(RTLContext);
    const navigate = useNavigate();

    const topbarRef1 = useRef(null);
    const topbarRef2 = useRef(null);
    const topbarRef3 = useRef(null);
    const topbarRef4 = useRef(null);

    // Fixed for 6.1.0
    // eslint-disable-next-line
    const searchPanel = useRef(null);

    useEffect(() => {
        // Fixed for 6.1.0
        /*if (props.searchActive) {
            searchPanel.current.element.focus();
        }*/
    }, [props.searchActive]);

    const onInputKeydown = (event: any) => {
        const key = event.which;

        //escape, tab and enter
        if (key === 27 || key === 9 || key === 13) {
            props.onSearch(false);
        }
    };

    const model = [
        {
            label: 'UI KIT',
            items: [
                [
                    {
                        label: 'UI KIT 1',
                        items: [
                            {
                                label: 'Form Layout',
                                icon: 'pi pi-fw pi-id-card',
                                command: () => {
                                    navigate('/uikit/formlayout');
                                }
                            },
                            {
                                label: 'Input',
                                icon: 'pi pi-fw pi-check-square',
                                command: () => {
                                    navigate('/uikit/input');
                                }
                            },
                            {
                                label: 'Float Label',
                                icon: 'pi pi-fw pi-bookmark',
                                command: () => {
                                    navigate('/uikit/floatlabel');
                                }
                            },
                            {
                                label: 'Button',
                                icon: 'pi pi-fw pi-mobile',
                                command: () => {
                                    navigate('/uikit/button');
                                }
                            },
                            {
                                label: 'File',
                                icon: 'pi pi-fw pi-file',
                                command: () => {
                                    navigate('/uikit/file');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'UI KIT 2',
                        items: [
                            {
                                label: 'Table',
                                icon: 'pi pi-fw pi-table',
                                command: () => {
                                    navigate('/uikit/table');
                                }
                            },
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-list',
                                command: () => {
                                    navigate('/uikit/list');
                                }
                            },
                            {
                                label: 'Tree',
                                icon: 'pi pi-fw pi-share-alt',
                                command: () => {
                                    navigate('/uikit/tree');
                                }
                            },
                            {
                                label: 'Panel',
                                icon: 'pi pi-fw pi-tablet',
                                command: () => {
                                    navigate('/uikit/panel');
                                }
                            },
                            {
                                label: 'Chart',
                                icon: 'pi pi-fw pi-chart-bar',
                                command: () => {
                                    navigate('/uikit/chart');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'UI KIT 3',
                        items: [
                            {
                                label: 'Overlay',
                                icon: 'pi pi-fw pi-clone',
                                command: () => {
                                    navigate('/uikit/overlay');
                                }
                            },
                            {
                                label: 'Menu',
                                icon: 'pi pi-fw pi-bars',
                                command: () => {
                                    navigate('/uikit/menu');
                                }
                            },
                            {
                                label: 'Message',
                                icon: 'pi pi-fw pi-comment',
                                command: () => {
                                    navigate('/uikit/message');
                                }
                            },
                            {
                                label: 'Misc',
                                icon: 'pi pi-fw pi-circle',
                                command: () => {
                                    navigate('/uikit/misc');
                                }
                            }
                        ]
                    }
                ]
            ]
        },

        {
            label: 'PAGES',
            items: [
                [
                    {
                        label: 'PAGES 1',
                        items: [
                            {
                                label: 'Access',
                                icon: 'pi pi-fw pi-lock',
                                command: () => {
                                    navigate('/access');
                                }
                            },
                            {
                                label: 'Calendar',
                                icon: 'pi pi-fw pi-calendar-plus',
                                command: () => {
                                    navigate('/pages/calendar');
                                }
                            }
                        ]
                    },
                    {
                        label: 'PAGES 2',
                        items: [
                            {
                                label: 'Crud',
                                icon: 'pi pi-fw pi-pencil',
                                command: () => {
                                    navigate('/pages/crud');
                                }
                            },
                            {
                                label: 'Empty Page',
                                icon: 'pi pi-fw pi-circle',
                                command: () => {
                                    navigate('/pages/empty');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'PAGES 3',
                        items: [
                            {
                                label: 'Timeline',
                                icon: 'pi pi-fw pi-calendar',
                                command: () => {
                                    navigate('/pages/timeline');
                                }
                            },
                            {
                                label: 'Help',
                                icon: 'pi pi-fw pi-question-circle',
                                command: () => {
                                    navigate('/pages/help');
                                }
                            }
                        ]
                    },
                    {
                        label: 'PAGES 4',
                        items: [
                            {
                                label: 'Invoice',
                                icon: 'pi pi-fw pi-dollar',
                                command: () => {
                                    navigate('/pages/invoice');
                                }
                            },
                            {
                                label: 'Landing',
                                icon: 'pi pi-fw pi-globe',
                                command: () => {
                                    navigate('/landing');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'PAGES 5',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                command: () => {
                                    navigate('/login');
                                }
                            },
                            {
                                label: 'Not Found',
                                icon: 'pi pi-fw pi-exclamation-circle',
                                command: () => {
                                    navigate('/notfound');
                                }
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                command: () => {
                                    navigate('/error');
                                }
                            }
                        ]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="layout-topbar shadow-4">
            <div className="layout-topbar-left">
                <button type="button" style={{ cursor: 'pointer' }} className="layout-topbar-logo p-link" onClick={() => navigate('/')}>
                    <img id="app-logo" src="assets/layout/images/ccl-group-logo.png" alt="ultima-layout" style={{ height: '9rem' }} />
                </button>
                <button type="button" className="layout-menu-button shadow-6 p-link" onClick={props.onMenuButtonClick}>
                    <i className="pi pi-chevron-right"></i>
                </button>
            </div>
            <div className="ml-auto text-2xl flex-column align-items-center" style={{ width: '300px !important', padding: '35px' }}>
                <div className="text-black-alpha-90">
                    Email: 
                    <a className='pl-1 text-black-alpha-90' href={`mailto:cclgroup77@gmail.com?subject=Request Service Quote`}>
                        cclgroup77@gmail.com
                    </a>
                </div>
                <div className="text-black-alpha-90">Phone: +61 0420655788</div>
            </div>
        </div>
    );
};

export default AppTopbar;
